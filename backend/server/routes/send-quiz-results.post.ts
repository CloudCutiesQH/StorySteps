import { defineEventHandler, readValidatedBody } from "h3";
import { z } from 'zod';
import { sendQuizEmail, type SendQuizEmailData } from "../utils/email";

// Validation schemas
const QuizResultSchema = z.object({
  question: z.string(),
  userAnswer: z.string(),
  correctAnswer: z.string(),
  isCorrect: z.boolean(),
  explanation: z.string()
});

const FlashCardSchema = z.object({
  front: z.string(),
  back: z.string()
});

const RequestBodySchema = z.object({
  recipientEmail: z.string().email('Invalid email address'),
  storyTitle: z.string().min(1, 'Story title is required'),
  score: z.number().min(0).max(100),
  totalQuestions: z.number().positive(),
  correctAnswers: z.number().min(0),
  quizResults: z.array(QuizResultSchema),
  flashCards: z.array(FlashCardSchema).optional().default([])
});

export default defineEventHandler(async (event) => {
  try {
    // Validate request body
    const result = await readValidatedBody(event, RequestBodySchema.safeParse);

    if (!result.success) {
      return {
        success: false,
        error: 'Invalid request data',
        details: result.error.issues
      };
    }

    const body = result.data;

    // Prepare email data
    const emailData: SendQuizEmailData = {
      recipientEmail: body.recipientEmail,
      storyTitle: body.storyTitle,
      score: body.score,
      totalQuestions: body.totalQuestions,
      correctAnswers: body.correctAnswers,
      quizResults: body.quizResults,
      flashCards: body.flashCards
    };

    // Send email
    await sendQuizEmail(emailData);

    return {
      success: true,
      message: `Quiz results sent successfully to ${body.recipientEmail}`
    };

  } catch (error: any) {
    console.error('Error sending quiz results email:', error);

    // Check if it's an email configuration error
    if (error.message?.includes('Email configuration')) {
      return {
        success: false,
        error: 'Email service is not configured. Please contact the administrator.',
        details: error.message
      };
    }

    return {
      success: false,
      error: 'Failed to send quiz results email',
      details: error.message || 'Unknown error occurred'
    };
  }
});
