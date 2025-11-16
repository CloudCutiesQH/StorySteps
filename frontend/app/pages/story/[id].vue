<template>
        <iframe :src="iframeSrc" class="h-screen w-full">
        </iframe>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()
const storyId = route.params.id
const story = sessionStorage.getItem(`story-${storyId}`) || ''
const generatedStory = ref(story)

const iframeSrc = computed(() => {
    if (!story) return ''
    const blob = new Blob([story], { type: 'text/html' })
    return URL.createObjectURL(blob)
})
</script>