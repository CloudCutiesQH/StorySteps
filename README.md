# StorySteps

**Autonomous Educational Game Creation with AI Agents & Observability**

A Quackathon project that generates interactive educational stories using multi-agent LLMs, tracks learning paths with distributed tracing, and auto-generates personalized quizzes.

## Overview

StorySteps is an autonomous educational platform that:
1. **Auto-generates** branching narrative games from simple prompts using a multi-agent LLM pipeline
2. **Tracks** user choices through Twine stories as distributed traces/spans
3. **Monitors** learning patterns with Prometheus & Grafana
4. **Creates** personalized quizzes based on the user's actual path through the story

## Architecture

### Multi-Agent Story Generation Pipeline

```
User Prompt → Agent 1: Prompt Refiner
           → Agent 2: Outline Generator
           → Agent 3: Story Writer
           → Agent 4: Twee/Harlowe Converter
           → Playable Twine Story
```

### Learning Path Tracking & Assessment

```
User plays Twine story → Choice tracking (traces/spans)
                       → Prometheus/Grafana (observability)
                       → Quiz Generation Agent
                       → Personalized Assessment
```

## Tech Stack

### Frontend
- **Nuxt 3** - Vue framework
- **Nuxt UI** - Component library
- **Tailwind CSS** - Styling
- **Twine/Harlowe** - Interactive story engine

### Backend
- **Nitro** - Server framework
- **OpenAI SDK** - LLM orchestration (using Gemini models)
- **H3** - HTTP framework
- **Zod** - Validation
- **Nodemailer** - Email delivery for quiz results & flashcards

### Observability (Planned)
- **Prometheus** - Metrics collection
- **Grafana** - Visualization & dashboards
- **OpenTelemetry** - Distributed tracing

### AI Models
- **Gemini 2.0 Flash** - Prompt refinement, outline generation, story writing
- **Gemini 2.0 Flash (experimental)** - Twee/Harlowe code generation

## Current Status

### ✅ Implemented
- Multi-agent story generation pipeline (4 LLM agents)
- Twine story compilation (Harlowe format)
- Interactive spinning wheel for topic selection
- Quiz UI with beautiful pastel gradient design
- Email delivery system for quiz results & flashcards
- Frontend routing & navigation
- Automated flashcard generation from quiz data

### 🚧 In Progress
- Twine instrumentation for choice tracking
- Trace/span collection API
- Prometheus/Grafana integration
- Quiz generation agent from trace analysis

## How It Works

1. **User inputs** a learning theme and prompt (or spins the wheel for random selection)
2. **4 LLM agents collaborate** to create a structured educational story
3. **Story is compiled** into playable Twine (Harlowe) format
4. **User plays** through branching narrative
5. **Choices are tracked** as distributed traces (passages visited, decisions made)
6. **Metrics flow** to Prometheus/Grafana for analysis
7. **Quiz is auto-generated** based on user's unique path with pastel gradient UI
8. **Email delivery** sends beautiful quiz results and flashcards to user's inbox
9. **Assessment reveals** learning insights and knowledge gaps

## Project Structure

```
StorySteps/
├── frontend/          # Nuxt 3 app
│   ├── app/pages/    # Quiz, index pages
│   └── public/       # Static Twine stories
└── backend/          # Nitro server
    ├── prompts.ts    # LLM system prompts
    └── server/routes/
        └── generate.post.ts  # Story generation pipeline
```

## Development Setup

### Prerequisites
- Node.js 18+
- pnpm
- Gemini API key
- Email account (Gmail recommended) for quiz results delivery

### Installation

```bash
# Install dependencies
cd frontend && pnpm install
cd backend && pnpm install

# Set up environment
cp backend/.env.sample backend/.env
# Add your GEMINI_API_KEY to .env
# Configure email settings (see Email Setup below)

# Run frontend
cd frontend && pnpm dev

# Run backend
cd backend && pnpm dev
```

### Email Setup

To enable quiz results and flashcard delivery via email, configure these variables in `backend/.env`:

```bash
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_SECURE=false
EMAIL_USER=your_email@gmail.com
EMAIL_PASSWORD=your_app_password_here
```

**For Gmail users:**
1. Enable 2-factor authentication on your Google account
2. Generate an app password at [https://myaccount.google.com/apppasswords](https://myaccount.google.com/apppasswords)
3. Use the app password in `EMAIL_PASSWORD` (not your regular password)

**Features:**
- Beautiful HTML email with pastel gradients
- Quiz results with correct/incorrect indicators
- Auto-generated flashcards from story journey
- Fully responsive email design

## Roadmap

### Completed

- [x] Interactive spinning wheel for topic selection
- [x] Pastel gradient UI redesign for quiz page
- [x] Email delivery system for quiz results
- [x] Automated flashcard generation

### In Progress

- [ ] Twine story instrumentation (inject trace collection)
- [ ] Trace collection API endpoints
- [ ] Quiz generation agent (analyze traces → questions)
- [ ] Real-time quiz triggers after story completion

### Planned

- [ ] Prometheus exporter for story metrics
- [ ] Grafana dashboards for learning analytics
- [ ] Learning path optimization based on aggregated data
- [ ] User accounts and progress tracking

## License

MIT

---

Built for Quackathon with multi-agent AI orchestration and observability-driven education.
