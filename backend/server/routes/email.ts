import { defineEventHandler, readValidatedBody } from "h3";

import { OpenAI } from "openai";
import { zodResponseFormat } from "openai/helpers/zod.mjs";
import { Resend } from "resend";
import z from "zod";

const bodySchema = z.object({
    email: z.string().email(),
    missed_questions: z.array(z.string()).min(1)
});

export default defineEventHandler(async (event) => {
    if (event.req.method !== "POST") {
        event.node.res.statusCode = 405;
        event.node.res.end(JSON.stringify({ error: "Method not allowed" }));
        return;
    }

    const result = await readValidatedBody(event, bodySchema.safeParse);
    if (!result.success) {
        event.node.res.statusCode = 400;
        event.node.res.end(JSON.stringify({ error: "Invalid request body", details: result.error }));
        return;
    }
    
    const body = result.data;

    const client = new OpenAI({
        apiKey: process.env.GEMINI_API_KEY,
        baseURL: "https://generativelanguage.googleapis.com/v1beta/openai/"
    });

    type flashcardsResp = {
        flashcards: {
        question: string;
        answer: string;
        }[];
    };

    const flashcardsZ = z.object({
        flashcards: z.array(z.object({
            question: z.string(),
            answer: z.string()
        })).length(body.missed_questions.length)
    });

    const resp = await client.chat.completions.parse({
        model: "gemini-2.0-flash",
        messages: [
            {
                role: "system",
                content: `You are a helpful assistant that creates flashcards to help students study.`
            },
            {
                role: "user",
                content: `Create ${body.missed_questions.length} flashcards to help a student study for a quiz. The student missed the following questions: ${body.missed_questions.join("; ")}. For each question, create a flashcard with a concise question and answer pair that effectively covers the material.`
            }
        ],
        response_format: zodResponseFormat(flashcardsZ, "Flashcards"),
    });

    type Flashcard = {
        question: string;
        answer: string;
    };

    const flashcards = resp.choices[0].message.parsed?.flashcards as Flashcard[];

    const escapeHtml = (value: string) => value
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#39;");

    const buildFlashcardsHtml = (cards: Flashcard[]) => {
        const styles = `
            body {
                font-family: "Inter", "Helvetica Neue", Helvetica, Arial, sans-serif;
                margin: 0;
                padding: 0;
                background: #eef2ff;
                color: #0f172a;
            }
            .email-shell {
                padding: 24px;
            }
            .flashcards-wrapper {
                display: grid;
                gap: 16px;
            }
            .flashcard {
                background: #ffffff;
                border-radius: 16px;
                padding: 16px;
                border: 1px solid #cbd5f5;
                box-shadow: 0 5px 15px rgba(15, 23, 42, 0.08);
            }
            .flashcard input {
                display: none;
            }
            .flashcard label {
                display: block;
                cursor: pointer;
            }
            .flashcard .question {
                margin: 0 0 6px;
                font-size: 16px;
                font-weight: 600;
                color: #1e223b;
            }
            .flashcard .hint {
                margin: 0 0 12px;
                font-size: 13px;
                color: #475569;
            }
            .flashcard .answer {
                margin: 0;
                max-height: 0;
                overflow: hidden;
                transition: max-height 0.2s ease;
                font-size: 15px;
                color: #0f172a;
            }
            .flashcard input:checked + label .answer {
                max-height: 500px;
            }
        `;

        const cardsMarkup = cards.map((card, index) => {
            const id = `flashcard-${index}`;
            return `
                <div class="flashcard">
                    <input type="checkbox" id="${id}" />
                    <label for="${id}">
                        <p class="question">${escapeHtml(card.question)}</p>
                        <p class="hint">Tap to reveal the answer</p>
                        <p class="answer">${escapeHtml(card.answer)}</p>
                    </label>
                </div>
            `;
        }).join("");

        return `
            <!DOCTYPE html>
            <html>
            <head>
                <meta charset="UTF-8" />
                <title>Your StorySteps Flashcards</title>
                <style>
                    ${styles}
                </style>
            </head>
            <body>
                <div class="email-shell">
                    <p>Here are your flashcards. Tap any card to uncover the answer.</p>
                    <div class="flashcards-wrapper">
                        ${cardsMarkup}
                    </div>
                </div>
            </body>
            </html>
        `;
    };

    const emailHtml = buildFlashcardsHtml(flashcards);
    console.log(emailHtml)

    // Here you would typically send the email using your preferred email service
    // For demonstration, we'll just log the flashcards to the console


    const resend = new Resend(process.env.RESEND_API_KEY);

    await resend.emails.send({
        from: "noreply@points.codaealab.com",
        to: body.email,
        subject: "StorySteps | Your Study Flashcards",
        html: `${emailHtml}`,
    });

    return 200;
})