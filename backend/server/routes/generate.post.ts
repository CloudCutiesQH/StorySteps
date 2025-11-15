import { defineEventHandler, readValidatedBody } from "h3";
import { z } from 'zod';
import { outlinePrompt } from "../../prompts"

import { OpenAI } from "openai";

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
        apiKey: process.env.GEMINIKEY,
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

    // Generate story from outline
    const storyResp = await openai.chat.completions.create({
        model: "gemini-2.0-flash",
        messages: [
            { role: "user", content: `The theme is \n${body.theme} \n\nThe prompt is: \n${body.prompt}` },
            { role: "user", content: `${refinedOutline}` }
        ]
    })

    console.log("story resp.." + storyResp.choices[0].message.content)

    // Convert Generated story into twee format (Harlowe)
    const tweeResp = await openai.chat.completions.create({
        model: "gemini-2.5-pro",
        messages: [{
            role: "system",
            content: `You are an expert at generating working Twine stories. Return only a Twine-formatted story (no extra commentary). Use passage headers like:
:: Passage Name
and link using Twine double-bracket syntax:
[[Link Text|Target Passage]]

Produce stories that contain 6-12 passages (nodes). Demonstrate basic Twine operations: linking to passages, labeled links, and simple Harlowe-compatible macros (use Harlowe 3.x syntax such as (set:), (if:), (link:)). Keep passages concise and self-contained.`
        },
        {
            role: "user",
            content: "Create a short educational Twine story about the water cycle."
        },
        {
            role: "assistant",
            content: `:: Start
Welcome to the Water Cycle lesson. Choose a process to explore.
[[Evaporation|Evaporation]]
[[Condensation|Condensation]]

:: Evaporation
Heat causes water to become vapor and rise.
[[Learn about condensation|Condensation]]

:: Condensation
Vapor cools and forms droplets in clouds.
[[Next: Precipitation|Precipitation]]

:: Precipitation
Droplets fall as rain, snow, or hail.
[[See collection|Collection]]

:: Collection
Water gathers in rivers, lakes, and oceans.
[[Review the cycle|Start]]
[[Finish lesson|End]]

:: End
You completed the Water Cycle mini-lesson. [[Restart|Start]]`
        },
        {
            role: "user",
            content: "Create a short choose-your-path story about exploring a forest."
        },
        {
            role: "assistant",
            content: `:: Start
You stand at the forest edge. Will you enter or walk along the edge?
[[Enter the forest|Forest]]
[[Walk the edge|Edge Path]]

:: Forest
Tall trees surround you. A rustle appears ahead.
[[Investigate the sound|Clearing]]
[[Return to edge|Start]]

:: Edge Path
You follow the path and find a stream.
[[Follow the stream|Stream]]
[[Return to edge|Start]]

:: Clearing
You find a friendly deer. Learn from it or continue?
[[Learn from the deer|Learn]]
[[Continue deeper|Stream]]

:: Stream
The stream leads to a small waterfall.
[[Approach waterfall|Waterfall]]
[[Go back to clearing|Clearing]]

:: Learn
The deer teaches patience. (set: $learned to true)
[[Thank the deer|End]]

:: Waterfall
A beautiful waterfall gives you energy.
[[Return to start|Start]]
[[Finish the journey|End]]

:: End
The journey ends. [[Play again|Start]]`
        },
        { role: "user", content: `The story is as follows: \n\n${storyResp.choices[0].message.content}\n\n Convert the story into a working Twine story in Harlowe format.` }
        ]
    })

    return tweeResp.choices[0].message.content

})