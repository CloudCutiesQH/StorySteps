<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900">
    <!-- Hero Section -->
    <div class="bg-gradient-to-r from-purple-600 to-blue-600 text-white">
      <UContainer class="py-16">
        <div class="max-w-3xl">
          <h1 class="text-5xl font-bold mb-4">StorySteps</h1>
          <p class="text-xl text-purple-100 mb-2">
            Learn through interactive stories
          </p>
          <p class="text-lg text-purple-200">
            Educational branching narratives that make complex concepts fun. Because everyone learns better through stories.
          </p>
        </div>
      </UContainer>
    </div>

    <!-- Story Grid -->
    <UContainer class="py-12">
      <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-8">
        Explore Stories
      </h2>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <UCard
          v-for="story in stories"
          :key="story.id"
          class="hover:shadow-lg transition-shadow"
        >
          <!-- Cover Image Placeholder -->
          <div
            :class="story.coverColor"
            class="h-48 rounded-t-lg -mt-6 -mx-6 mb-4 flex items-center justify-center"
          >
            <span class="text-6xl">{{ story.emoji }}</span>
          </div>

          <!-- Story Info -->
          <div class="space-y-3">
            <div class="flex items-start justify-between gap-2">
              <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                {{ story.title }}
              </h3>
              <UBadge
                :color="getAgeRatingColor(story.ageRating)"
                variant="soft"
                size="sm"
              >
                {{ story.ageRating }}
              </UBadge>
            </div>

            <p class="text-gray-600 dark:text-gray-400 text-sm">
              {{ story.description }}
            </p>

            <!-- Concept Tags -->
            <div class="flex flex-wrap gap-2">
              <UBadge
                v-for="tag in story.tags"
                :key="tag"
                color="gray"
                variant="soft"
                size="xs"
              >
                {{ tag }}
              </UBadge>
            </div>

            <!-- Author -->
            <p v-if="story.author" class="text-xs text-gray-500 dark:text-gray-500">
              by {{ story.author }}
            </p>

            <!-- CTA Button -->
            <UButton
              color="primary"
              size="lg"
              block
              @click="startStory(story.id)"
            >
              Start Story
            </UButton>
          </div>
        </UCard>
      </div>

      <!-- Empty State -->
      <div
        v-if="stories.length === 0"
        class="text-center py-20"
      >
        <p class="text-gray-500 dark:text-gray-400 text-lg">
          No stories available yet. Check back soon!
        </p>
      </div>
    </UContainer>
  </div>
</template>

<script setup lang="ts">
interface Story {
  id: string
  title: string
  description: string
  ageRating: string
  tags: string[]
  coverColor: string
  emoji: string
  author?: string
}

// Hardcoded mock data
const stories = ref<Story[]>([
  {
    id: 'photosynthesis-adventure',
    title: 'Photosynthesis Adventure',
    description: 'Journey as a water molecule through a plant leaf and discover how sunlight creates food.',
    ageRating: '8-10',
    tags: ['science', 'biology', 'plants'],
    coverColor: 'bg-gradient-to-br from-green-400 to-emerald-600',
    emoji: '🌱',
    author: 'AI Agent Team'
  },
  {
    id: 'fraction-quest',
    title: 'The Fraction Quest',
    description: 'Help the Pizza Kingdom divide their feast fairly among the royal families.',
    ageRating: '7-9',
    tags: ['math', 'fractions', 'problem-solving'],
    coverColor: 'bg-gradient-to-br from-orange-400 to-red-500',
    emoji: '🍕',
    author: 'AI Agent Team'
  },
  {
    id: 'water-cycle',
    title: 'Around the World in Water Drops',
    description: 'Experience the water cycle from the perspective of a single water droplet.',
    ageRating: '6-8',
    tags: ['science', 'earth', 'weather'],
    coverColor: 'bg-gradient-to-br from-blue-400 to-cyan-600',
    emoji: '💧',
    author: 'AI Agent Team'
  },
  {
    id: 'gravity-detective',
    title: 'The Gravity Detective',
    description: 'Solve mysteries using your knowledge of gravity and motion in this physics adventure.',
    ageRating: '10-12',
    tags: ['physics', 'gravity', 'newton'],
    coverColor: 'bg-gradient-to-br from-purple-500 to-indigo-600',
    emoji: '🔍',
    author: 'AI Agent Team'
  },
  {
    id: 'cell-city',
    title: 'Cell City Adventures',
    description: 'Explore a living cell reimagined as a bustling city with organelles as buildings.',
    ageRating: '9-11',
    tags: ['biology', 'cells', 'anatomy'],
    coverColor: 'bg-gradient-to-br from-pink-400 to-rose-600',
    emoji: '🏙️',
    author: 'AI Agent Team'
  },
  {
    id: 'democracy-island',
    title: 'Democracy Island',
    description: 'Build a society and learn about voting, laws, and civic responsibility.',
    ageRating: '11-13',
    tags: ['civics', 'government', 'society'],
    coverColor: 'bg-gradient-to-br from-yellow-400 to-amber-600',
    emoji: '🏝️',
    author: 'AI Agent Team'
  }
])

function getAgeRatingColor(ageRating: string): string {
  const age = parseInt(ageRating.split('-')[0])
  if (age <= 7) return 'green'
  if (age <= 10) return 'blue'
  return 'orange'
}

function startStory(id: string) {
  navigateTo(`/story/${id}`)
}
</script>
