<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900">
    <!-- Hero Section -->
    <div class="bg-gradient-to-r from-purple-600 to-blue-600 text-white">
      <UContainer class="py-16">
        <div class="max-w-3xl mx-auto text-center">
          <h1 class="text-5xl font-bold mb-4">StorySteps</h1>
          <p class="text-xl text-purple-100 mb-2">
            Learn through interactive stories
          </p>
          <p class="text-lg text-purple-200">
            Create your own educational branching narrative. Tell us what you want to learn about!
          </p>
        </div>
      </UContainer>
    </div>

    <!-- Story Generator Form -->
    <UContainer class="py-12">
      <div class="max-w-2xl mx-auto">
        <UCard>
          <template #header>
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white">
              Create Your Story
            </h2>
            <p class="text-gray-600 dark:text-gray-400 mt-1">
              Choose a topic and theme to generate an interactive learning experience
            </p>
          </template>

          <form @submit.prevent="generateStory" class="space-y-6">
            <!-- Topic Input -->
            <div>
              <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                What do you want to learn about?
              </label>
              <UInput
                v-model="topic"
                placeholder="e.g., Photosynthesis, Fractions, Water Cycle"
                size="lg"
                :disabled="isGenerating"
                required
              />
              <p class="text-xs text-gray-500 dark:text-gray-400 mt-1">
                Enter any educational topic you're curious about
              </p>
            </div>

            <!-- Theme Input -->
            <div>
              <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Choose a story theme
              </label>
              <UInput
                v-model="theme"
                placeholder="e.g., Jack and the Giant, Space Adventure, Detective Mystery"
                size="lg"
                :disabled="isGenerating"
                required
              />
              <p class="text-xs text-gray-500 dark:text-gray-400 mt-1">
                Pick a fun theme to make learning engaging
              </p>
            </div>

            <!-- Age Rating (Optional) -->
            <div>
              <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Age Group (Optional)
              </label>
              <USelect
                v-model="ageRating"
                :options="ageOptions"
                size="lg"
                :disabled="isGenerating"
              />
            </div>

            <!-- Generate Button -->
            <UButton
              type="submit"
              color="primary"
              size="lg"
              block
              :loading="isGenerating"
              :disabled="!topic || !theme"
            >
              {{ isGenerating ? 'Generating Your Story...' : 'Generate Story' }}
            </UButton>
          </form>

          <!-- Error Display -->
          <UAlert
            v-if="error"
            color="red"
            variant="soft"
            title="Generation Failed"
            :description="error"
            class="mt-4"
            :close-button="{ icon: 'i-heroicons-x-mark-20-solid', color: 'red', variant: 'link' }"
            @close="error = null"
          />
        </UCard>

        <!-- Examples Section -->
        <div class="mt-8">
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Need inspiration? Try these:
          </h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <UCard
              v-for="example in examples"
              :key="example.topic"
              class="cursor-pointer hover:shadow-lg transition-shadow"
              @click="useExample(example)"
            >
              <div class="flex items-start gap-3">
                <span class="text-3xl">{{ example.emoji }}</span>
                <div>
                  <h4 class="font-semibold text-gray-900 dark:text-white">
                    {{ example.topic }}
                  </h4>
                  <p class="text-sm text-gray-600 dark:text-gray-400">
                    Theme: {{ example.theme }}
                  </p>
                </div>
              </div>
            </UCard>
          </div>
        </div>
      </div>
    </UContainer>
  </div>
</template>

<script setup lang="ts">
const topic = ref('')
const theme = ref('')
const ageRating = ref('8-10')
const isGenerating = ref(false)
const error = ref<string | null>(null)

const ageOptions = [
  { label: '6-8 years', value: '6-8' },
  { label: '8-10 years', value: '8-10' },
  { label: '10-12 years', value: '10-12' },
  { label: '12-14 years', value: '12-14' }
]

const examples = [
  {
    topic: 'Photosynthesis',
    theme: 'Jack and the Giant Beanstalk',
    emoji: '🌱'
  },
  {
    topic: 'Fractions',
    theme: 'Pizza Party',
    emoji: '🍕'
  },
  {
    topic: 'Water Cycle',
    theme: 'Adventure Around the World',
    emoji: '💧'
  },
  {
    topic: 'Gravity',
    theme: 'Space Detective',
    emoji: '🔍'
  }
]

function useExample(example: typeof examples[0]) {
  topic.value = example.topic
  theme.value = example.theme
}

async function generateStory() {
  isGenerating.value = true
  error.value = null

  try {
    // Call your backend API to generate the story
    const response = await $fetch('/api/generate-story', {
      method: 'POST',
      body: {
        topic: topic.value,
        theme: theme.value,
        ageRating: ageRating.value
      }
    })

    // Response should include the story ID or HTML filename
    // e.g., { storyId: 'generated-story-12345' }
    const storyId = response.storyId || 'teststory'

    // Navigate to the story viewer page
    navigateTo(`/story/${storyId}`)
  } catch (err: any) {
    error.value = err.message || 'Failed to generate story. Please try again.'
    isGenerating.value = false
  }
}
</script>
