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
            Need inspiration?
          </h3>

          <!-- Spinning Wheel -->
          <div class="mb-8 flex flex-col items-center">
            <div class="relative w-64 h-64 mb-6">
              <!-- Wheel Container -->
              <div
                class="absolute inset-0 rounded-full border-8 border-purple-300 dark:border-purple-700 shadow-2xl overflow-hidden transition-transform duration-[3000ms] ease-out"
                :style="{ transform: `rotate(${wheelRotation}deg)` }"
              >
                <!-- Wheel Segments -->
                <div
                  v-for="(example, index) in examples"
                  :key="index"
                  class="absolute inset-0 flex items-center justify-center"
                  :style="getSegmentStyle(index)"
                >
                  <div class="transform -rotate-45 text-center">
                    <div class="text-4xl mb-1">{{ example.emoji }}</div>
                    <div class="text-xs font-bold text-white drop-shadow-lg">
                      {{ example.topic }}
                    </div>
                  </div>
                </div>
              </div>

              <!-- Center Button -->
              <div class="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div class="w-16 h-16 rounded-full bg-white dark:bg-gray-800 shadow-xl border-4 border-purple-500 flex items-center justify-center pointer-events-auto">
                  <button
                    @click="spinWheel"
                    :disabled="isSpinning"
                    class="w-full h-full rounded-full flex items-center justify-center text-2xl hover:scale-110 transition-transform disabled:opacity-50"
                  >
                    {{ isSpinning ? '🎯' : '🎲' }}
                  </button>
                </div>
              </div>

              <!-- Pointer Arrow -->
              <div class="absolute -top-8 left-1/2 transform -translate-x-1/2">
                <div class="w-0 h-0 border-l-8 border-r-8 border-t-[20px] border-l-transparent border-r-transparent border-t-purple-600 drop-shadow-lg"></div>
              </div>
            </div>

            <UButton
              color="purple"
              variant="soft"
              size="lg"
              @click="spinWheel"
              :disabled="isSpinning"
              :loading="isSpinning"
            >
              {{ isSpinning ? 'Spinning...' : 'Spin the Wheel!' }}
            </UButton>

            <p class="text-sm text-gray-500 dark:text-gray-400 mt-2">
              Let fate choose your learning adventure!
            </p>
          </div>

          <!-- Examples Grid -->
          <h4 class="text-md font-semibold text-gray-700 dark:text-gray-300 mb-3">
            Or pick directly:
          </h4>
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
const isGenerating = ref(false)
const error = ref<string | null>(null)

// Spinning wheel state
const wheelRotation = ref(0)
const isSpinning = ref(false)

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

// Spinning wheel functions
const wheelColors = ['#9333ea', '#7c3aed', '#6366f1', '#3b82f6']

function getSegmentStyle(index: number) {
  const segmentAngle = 360 / examples.length
  const rotation = index * segmentAngle
  const color = wheelColors[index % wheelColors.length]

  return {
    transform: `rotate(${rotation}deg)`,
    background: `conic-gradient(from 0deg at 50% 50%, ${color} 0deg, ${color} ${segmentAngle}deg, transparent ${segmentAngle}deg)`,
    clipPath: `polygon(50% 50%, 100% 0%, 100% 100%)`
  }
}

function spinWheel() {
  if (isSpinning.value) return

  isSpinning.value = true

  // Random spins between 5-8 full rotations plus a random offset
  const spins = 5 + Math.random() * 3
  const randomDegree = Math.random() * 360
  const totalRotation = wheelRotation.value + (spins * 360) + randomDegree

  wheelRotation.value = totalRotation

  // After animation completes, select the example
  setTimeout(() => {
    const segmentAngle = 360 / examples.length
    const normalizedRotation = totalRotation % 360
    const selectedIndex = Math.floor((360 - normalizedRotation + 90) / segmentAngle) % examples.length

    useExample(examples[selectedIndex])
    isSpinning.value = false
  }, 3000)
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
        theme: theme.value
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
