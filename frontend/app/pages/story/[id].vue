<template>
        <div class="absolute top-4 left-0 w-full flex justify-center z-10">
            <UButton to="/"
                class="m-2"
                color="primary">
                Back to Home
            </UButton>
            <UButton :to="`/quiz/${storyData?.timestamp}`">
                Take Quiz
            </UButton>
        </div>
        <iframe :src="iframeSrc" class="h-screen w-full">
        </iframe>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()
const storyId = route.params.id
const story = sessionStorage.getItem(`story-${storyId}`) || ''
const stories = sessionStorage.getItem(`stories`)
const storyData = computed(() => {
  if (!stories) return null
  const parsedStories = JSON.parse(stories) as StoredStory[]
  return parsedStories.find(s => String(s.timestamp) === String(storyId)) || null
})
type StoredStory = {
  topic: string
  theme: string
  timestamp: number
}

const iframeSrc = computed(() => {
    if (!story) return ''
    const blob = new Blob([story], { type: 'text/html' })
    return URL.createObjectURL(blob)
})
</script>