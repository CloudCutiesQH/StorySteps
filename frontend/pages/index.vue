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

      <!-- Loading State -->
      <div v-if="pending" class="text-center py-20">
        <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-500 mb-4 mx-auto" />
        <p class="text-gray-500 dark:text-gray-400 text-lg">Loading stories...</p>
      </div>

      <!-- Error State -->
      <div v-else-if="error" class="text-center py-20">
        <div class="text-6xl mb-4">😕</div>
        <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-2">Unable to Load Stories</h3>
        <p class="text-gray-500 dark:text-gray-400 text-lg mb-4">{{ error.message }}</p>
        <UButton color="primary" @click="refresh">
          Try Again
        </UButton>
      </div>

      <!-- Stories Grid -->
      <div v-else-if="stories && stories.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
            <p v-if="story.author" class="text-xs text-gray-500 dark:text-gray-400">
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
        v-else
        class="text-center py-20"
      >
        <div class="text-6xl mb-4">📚</div>
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

// Fetch stories from backend API
const { data: stories, pending, error, refresh } = await useFetch<Story[]>('/api/stories')

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
