import { createTransport } from 'nodemailer'

interface EmailConfig {
  host: string
  port: number
  secure: boolean
  auth: {
    user: string
    pass: string
  }
}

interface QuizResult {
  question: string
  userAnswer: string
  correctAnswer: string
  isCorrect: boolean
  explanation: string
}

interface FlashCard {
  front: string
  back: string
}

export interface SendQuizEmailData {
  recipientEmail: string
  storyTitle: string
  score: number
  totalQuestions: number
  correctAnswers: number
  quizResults: QuizResult[]
  flashCards: FlashCard[]
}

/**
 * Creates a nicely formatted HTML email with quiz results and flashcards
 */
function generateQuizEmailHTML(data: SendQuizEmailData): string {
  const { storyTitle, score, totalQuestions, correctAnswers, quizResults, flashCards } = data

  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
      line-height: 1.6;
      color: #333;
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
      background: linear-gradient(135deg, #fce7f3 0%, #f3e8ff 50%, #dbeafe 100%);
    }
    .container {
      background: white;
      border-radius: 12px;
      padding: 30px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }
    .header {
      text-align: center;
      padding: 20px 0;
      background: linear-gradient(135deg, #ec4899 0%, #a855f7 50%, #3b82f6 100%);
      border-radius: 8px;
      color: white;
      margin-bottom: 30px;
    }
    .header h1 {
      margin: 0;
      font-size: 28px;
    }
    .score-card {
      text-align: center;
      padding: 20px;
      background: linear-gradient(135deg, #fce7f3 0%, #f3e8ff 50%, #dbeafe 100%);
      border-radius: 8px;
      margin-bottom: 30px;
      border: 2px solid #e9d5ff;
    }
    .score-card .emoji {
      font-size: 48px;
      margin-bottom: 10px;
    }
    .score-card .score {
      font-size: 36px;
      font-weight: bold;
      background: linear-gradient(135deg, #ec4899, #a855f7, #3b82f6);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
    .section {
      margin-bottom: 30px;
    }
    .section h2 {
      color: #7c3aed;
      border-bottom: 2px solid #e9d5ff;
      padding-bottom: 10px;
      margin-bottom: 20px;
    }
    .quiz-item {
      padding: 15px;
      margin-bottom: 15px;
      border-left: 4px solid #a855f7;
      background: #faf5ff;
      border-radius: 4px;
    }
    .quiz-item.correct {
      border-left-color: #10b981;
      background: #f0fdf4;
    }
    .quiz-item.incorrect {
      border-left-color: #f472b6;
      background: #fef2f2;
    }
    .quiz-item h3 {
      margin: 0 0 10px 0;
      color: #1f2937;
      font-size: 16px;
    }
    .quiz-item .answer {
      margin: 5px 0;
      font-size: 14px;
    }
    .quiz-item .explanation {
      margin-top: 10px;
      padding: 10px;
      background: white;
      border-radius: 4px;
      font-size: 14px;
      color: #4b5563;
    }
    .flashcard {
      background: linear-gradient(135deg, #e9d5ff 0%, #ddd6fe 100%);
      border-radius: 8px;
      padding: 20px;
      margin-bottom: 15px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
    .flashcard .front {
      font-weight: bold;
      color: #7c3aed;
      margin-bottom: 10px;
      font-size: 16px;
    }
    .flashcard .back {
      color: #4b5563;
      font-size: 14px;
    }
    .footer {
      text-align: center;
      margin-top: 30px;
      padding-top: 20px;
      border-top: 2px solid #e9d5ff;
      color: #6b7280;
      font-size: 14px;
    }
    .badge {
      display: inline-block;
      padding: 4px 12px;
      border-radius: 12px;
      font-size: 12px;
      font-weight: 600;
      margin-left: 10px;
    }
    .badge.correct {
      background: #d1fae5;
      color: #065f46;
    }
    .badge.incorrect {
      background: #fce7f3;
      color: #9f1239;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>🎓 StorySteps Quiz Results</h1>
      <p style="margin: 5px 0 0 0; opacity: 0.9;">${storyTitle}</p>
    </div>

    <div class="score-card">
      <div class="emoji">${score === 100 ? '🏆' : score >= 75 ? '🌟' : score >= 50 ? '👍' : '📚'}</div>
      <div class="score">${score}%</div>
      <p style="margin: 10px 0 0 0; color: #6b7280;">
        ${correctAnswers} out of ${totalQuestions} correct
      </p>
    </div>

    <div class="section">
      <h2>📊 Your Quiz Results</h2>
      ${quizResults.map((result, index) => `
        <div class="quiz-item ${result.isCorrect ? 'correct' : 'incorrect'}">
          <h3>
            Question ${index + 1}: ${result.question}
            <span class="badge ${result.isCorrect ? 'correct' : 'incorrect'}">
              ${result.isCorrect ? '✓ Correct' : '✗ Incorrect'}
            </span>
          </h3>
          ${!result.isCorrect ? `<div class="answer"><strong>Your answer:</strong> ${result.userAnswer}</div>` : ''}
          <div class="answer"><strong>${result.isCorrect ? 'Your answer:' : 'Correct answer:'}</strong> ${result.correctAnswer}</div>
          ${result.explanation ? `<div class="explanation">💡 <strong>Learning Point:</strong> ${result.explanation}</div>` : ''}
        </div>
      `).join('')}
    </div>

    ${flashCards.length > 0 ? `
      <div class="section">
        <h2>🗂️ Study Flashcards</h2>
        <p style="color: #6b7280; margin-bottom: 20px;">
          Review these key concepts from your story journey:
        </p>
        ${flashCards.map(card => `
          <div class="flashcard">
            <div class="front">📌 ${card.front}</div>
            <div class="back">${card.back}</div>
          </div>
        `).join('')}
      </div>
    ` : ''}

    <div class="footer">
      <p><strong>Keep learning with StorySteps!</strong></p>
      <p>Visit us to create more interactive learning stories</p>
      <p style="margin-top: 15px; font-size: 12px; color: #9ca3af;">
        This email was sent from StorySteps - Educational Stories Platform
      </p>
    </div>
  </div>
</body>
</html>
  `.trim()
}

/**
 * Sends quiz results and flashcards via email
 */
export async function sendQuizEmail(data: SendQuizEmailData): Promise<void> {
  // Get email configuration from environment variables
  const emailConfig: EmailConfig = {
    host: process.env.EMAIL_HOST || 'smtp.gmail.com',
    port: parseInt(process.env.EMAIL_PORT || '587'),
    secure: process.env.EMAIL_SECURE === 'true',
    auth: {
      user: process.env.EMAIL_USER || '',
      pass: process.env.EMAIL_PASSWORD || ''
    }
  }

  // Validate email configuration
  if (!emailConfig.auth.user || !emailConfig.auth.pass) {
    throw new Error('Email configuration is incomplete. Please set EMAIL_USER and EMAIL_PASSWORD environment variables.')
  }

  // Create transporter
  const transporter = createTransport({
    host: emailConfig.host,
    port: emailConfig.port,
    secure: emailConfig.secure,
    auth: emailConfig.auth
  })

  // Generate email HTML
  const htmlContent = generateQuizEmailHTML(data)

  // Send email
  await transporter.sendMail({
    from: `"StorySteps Learning" <${emailConfig.auth.user}>`,
    to: data.recipientEmail,
    subject: `📚 Your StorySteps Quiz Results - ${data.storyTitle}`,
    html: htmlContent,
    text: `Your StorySteps Quiz Results\n\nStory: ${data.storyTitle}\nScore: ${data.score}%\n\nYou got ${data.correctAnswers} out of ${data.totalQuestions} questions correct.\n\nVisit StorySteps to review your detailed results and flashcards.`
  })
}
