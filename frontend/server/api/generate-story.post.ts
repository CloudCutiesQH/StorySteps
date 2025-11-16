export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  // Get backend URL from environment or use default
  const backendUrl = process.env.BACKEND_URL || 'http://localhost:3001'

  try {
    // Forward the request to the backend
    // Backend expects: { prompt, theme }
    const storyContent = await $fetch(`${backendUrl}/generate`, {
      method: 'POST',
      body: {
        prompt: body.topic,
        theme: body.theme
      }
    })

    // Return the story content (Twine HTML)
    return {
      success: true,
      storyId: `story-${Date.now()}`,
      content: storyContent
    }
  } catch (error: any) {
    console.error('Backend error:', error)
    throw createError({
      statusCode: error.statusCode || 500,
      message: error.message || 'Failed to generate story from backend'
    })
  }
})
