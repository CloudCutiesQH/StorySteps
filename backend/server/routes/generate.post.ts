import { defineEventHandler, readValidatedBody } from "h3";
import { z } from 'zod';
import { outlinePrompt } from "../../prompts"
import { readFile } from 'fs/promises';
import { join } from 'path';

import { OpenAI } from "openai";
import { Story, Passage, StoryFormat } from "twine-utils";

const RequestBodySchema = z.object({
    prompt: z.string().min(1),
    theme: z.string().min(1)
});

export default defineEventHandler(async (event) => {

    const result = await readValidatedBody(event, RequestBodySchema.safeParse);

    if (!result.success) {
        throw result.error;
    }
    const body = result.data;

    const openai = new OpenAI({
        apiKey: process.env.GEMINI_API_KEY,
        baseURL: "https://generativelanguage.googleapis.com/v1beta/openai/"
    })

    // Refine user prompt
    const resp = await openai.chat.completions.create({
        model: "gemini-2.0-flash",
        messages: [
            { role: "system", content: "You are a expert at crafting prompts for a llm that crafts stories in twine that tells educational stories.\n Only respond with the prompt." },
            { role: "user", content: `The theme is \n${body.theme} \n\nThe prompt is: \n${body.prompt}` }
        ]
    })

    const refinedPrompt = resp.choices[0].message.content
    console.log("refined prompt.." + refinedPrompt)

    // Generate story outline from prompt
    const outlineResp = await openai.chat.completions.create({
        model: "gemini-2.0-flash",
        messages: [
            { role: "system", content: outlinePrompt },
            { role: "user", content: `The theme is \n${body.theme} \n\nThe prompt is: \n${body.prompt}` }
        ]
    })

    const refinedOutline = outlineResp.choices[0].message.content


    // Generate story in Twee format from outline using structured output
    const storyResp = await openai.chat.completions.parse({
        model: "gemini-2.0-flash",
        response_format: {
            type: "json_schema",
            json_schema: {
                name: "TwinePassages",
                strict: true,
                schema: {
                    type: "object",
                    properties: {
                        passages: {
                            type: "array",
                            items: {
                                type: "object",
                                properties: {
                                    attributes: {
                                        type: "object",
                                        properties: {
                                            name: {
                                                type: "string"
                                            },
                                            tags: {
                                                type: "array",
                                                items: {
                                                    type: "string"
                                                }
                                            }
                                        },
                                        required: ["name"],
                                        additionalProperties: false
                                    },
                                    source: {
                                        type: "string"
                                    }
                                },
                                required: ["attributes", "source"],
                                additionalProperties: false
                            }
                        }
                    },
                    required: ["passages"],
                    additionalProperties: false
                }
            }
        },
        messages: [
            {
                role: "system",
                content: `You are an expert at generating working Twine stories in Harlowe 3 format. Return passages as a JSON object. Each passage should have:
- name: The passage title
- text: The passage content with Twine links using [[Link Text|Target Passage]] syntax and Harlowe macros like (set:), (if:), (link:)
- tags: Optional array of tags

Produce 6-12 passages. Keep passages concise and self-contained.`
            },
            { role: "user", content: `The theme is \n${body.theme} \n\nThe prompt is: \n${body.prompt}\n\nThe outline is: \n${refinedOutline}` },
        ],
    });

    
    
    const parsedResponse = storyResp.choices[0].message.parsed as unknown as { passages: Passage[] };


    // 1. Map  plain JavaScript objects to actual Passage class instances.
    const passageInstances = parsedResponse.passages.map(p => {
        return new Passage({
            attributes: p.attributes,
            source: p.source
        });
    });

    // 2. Create the story and assign the INSTANCES to it.
    const story = new Story({
        passages: passageInstances, // Pass all instances here
        javascript: "", 
        stylesheet: "" 
    });

    // Optional but good practice: explicitly set the start passage by name.
    // The library often defaults to the first passage if you don't.
    story.startPassage = passageInstances.find(p => p.attributes.name === 'The Glitch') || passageInstances[0];
    const twineHTML = story.toHTML();

    const storyformat = new StoryFormat("./harlowe-min.js")
    const finalHTML = storyformat.publish(story)
    // This will now work correctly!
    console.log(finalHTML);
    return finalHTML;
})