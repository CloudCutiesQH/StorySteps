import {Story, StoryFormat, Passage} from "twine-utils"
import { readFile } from "fs/promises";
const story = new Story();

story.attributes = {
    "creator": "twine-utils"
};

const passageInstances = [
    {
        attributes: {
            name: "StoryTitle"
        },
        source: "The Git Glitch"
    },
    {
        attributes: {
            name: "Starting Passage"
        },
        source: "You're Alex, a freelance coder, and disaster strikes! A power surge corrupted your vital app file. Deadline looming, career on the line. A cryptic email from your mentor mentions 'Git'.\n\n[[Ignore the Email: Try manual fix (BAD ENDING)|Deadline Disaster]]\n\n[[Search for the Email: Learn about Git|Decoding the Message]]"
    },
    {
        attributes: {
            name: "Decoding the Message"
        },
        source: "The email talks about 'repositories,' 'commits,' and 'branches.' A link to a Git tutorial is attached.\n\n[[Read the Tutorial (Slow Learning)|Initialize]]\n\n[[Skip the Tutorial (Risky)|The Panic]]"
    },
    {
        attributes: {
            name: "Initialize"
        },
        source: "The tutorial explains initializing a Git repository and staging changes.\n\n[[Initialize the Repo|Commit]]\n\n[[Skip Initialization|The Panic]]"
    },
    {
        attributes: {
            name: "Commit"
        },
        source: "You've added files. The next step involves making a commit with a descriptive message.\n\n[[Commit with Message|Branching]]\n\n[[Commit with No Message|The Panic]]"
    },
    {
        attributes: {
            name: "Branching"
        },
        source: "You learn about branching - trying new features without affecting the main project.\n\n[[Create and Checkout a Branch|The Undo]]\n\n[[Make Changes Directly|The Panic]]"
    },
    {
        attributes: {
            name: "The Undo"
        },
        source: "You learn about reverting and resetting changes.\n\n[[Revert to Earlier Commit|The Merge]]\n\n[[Force Push an Empty Commit|The Panic]]"
    },
    {
        attributes: {
            name: "The Merge"
        },
        source: "You're learning about merging - combining code from another branch.\n\n[[Merge Changes|Master of Version Control]]\n\n[[Merge Conflict|The Panic]]"
    },
    {
        attributes: {
            name: "The Panic"
        },
        source: "You've made Git mistakes! Error messages flash, the repository is a mess.\n\n[[Delete the .git folder|Data Graveyard]]\n\n[[Accept Defeat|Deadline Disaster]]"
    },
    {
        attributes: {
            name: "Master of Version Control"
        },
        source: "You successfully used Git to revert, recover, and meet the deadline! You now understand the power of version control."
    },
    {
        attributes: {
            name: "Data Graveyard"
        },
        source: "Deleting the .git folder erased all history. The corrupted file remains, with no recovery. The project is doomed."
    },
    {
        attributes: {
            name: "Deadline Disaster"
        },
        source: "Because of Git failures, you missed the deadline. The client is furious and terminates the contract. Your reputation is damaged."
    }
    
];

story.passages = passageInstances.map(p => new Passage({
    attributes: p.attributes,
    source: p.source
}));
story.startPassage = story.passages.find(p => p.attributes.name === 'Starting Passage') || story.passages[0];


const formatSource = await readFile("./scripts/format.js", "utf-8");
const format = new StoryFormat(formatSource)

console.log(format.publish(story));