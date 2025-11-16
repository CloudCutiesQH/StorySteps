// Mock Twine story for when backend is unavailable
const mockTwineStory = (topic: string, theme: string) => `
:: StoryTitle
${topic}: ${theme}

:: StoryData
{
  "ifid": "MOCK-STORY-${Date.now()}",
  "format": "Harlowe",
  "format-version": "3.3.0"
}

:: Start
Welcome to your interactive story about **${topic}** with a **${theme}** theme!

This is a demo story while the backend is being set up.

[[Begin your journey|Chapter1]]
[[Learn more about ${topic}|Info]]

:: Chapter1
You've started your adventure! The ${theme} awaits...

[[Make a choice A|ChoiceA]]
[[Make a choice B|ChoiceB]]
[[Go back|Start]]

:: ChoiceA
You chose path A! Great decision.

Learn about: ${topic}

[[Continue forward|Chapter2]]
[[Try another path|Chapter1]]

:: ChoiceB
You chose path B! Interesting choice.

More about: ${topic}

[[Continue forward|Chapter2]]
[[Try another path|Chapter1]]

:: Chapter2
You're making progress in this ${theme} story!

[[Discover more|Discovery]]
[[Return to start|Start]]

:: Discovery
🎉 You've discovered something amazing about ${topic}!

[[Complete the story|End]]
[[Explore more|Chapter2]]

:: Info
**About ${topic}:**

This is an educational story that helps you learn through interactive choices.

[[Back to start|Start]]

:: End
🏆 **Congratulations!**

You've completed the ${topic} story!

[[Play again|Start]]
`

export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  // Get backend URL from environment or use default

  try {
    // Forward the request to the backend
    // Backend expects: { prompt, theme }
    const storyContent = await $fetch(`/api/generate`, {
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
    console.warn('Backend unavailable, using mock story:', error.message)

    // Return mock story when backend fails (no API key, not ready, etc)
    return {
      success: true,
      storyId: `story-${Date.now()}`,
      content: mockTwineStory(body.topic, body.theme),
      isMock: true
    }
  }
})
