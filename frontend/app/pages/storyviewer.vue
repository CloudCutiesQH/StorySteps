<template>
        <iframe :src="iframeSrc" class="h-screen w-full">
        </iframe>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
const story = sessionStorage.getItem('generatedStory') || ''
const generatedStory = ref(story)

const iframeSrc = computed(() => {
    if (!story) return ''
    const blob = new Blob([story], { type: 'text/html' })
    return URL.createObjectURL(blob)
})
</script>