export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  // Get backend URL from environment or use default
  const backendUrl = process.env.BACKEND_URL || 'http://localhost:3001'

  try {
    // Forward the request to the backend
    const response = await $fetch(`${backendUrl}/send-quiz-results`, {
      method: 'POST',
      body
    })

    return response
  } catch (error: any) {
    console.error('Email backend error:', error)
    throw createError({
      statusCode: error.statusCode || 500,
      message: error.data?.error || error.message || 'Failed to send email'
    })
  }
})
