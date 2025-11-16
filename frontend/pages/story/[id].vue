<template>
  <div class="min-h-screen bg-gray-900">
   <!-- navbar -->
    <div class="bg-gray-800 border-b border-gray-700">
      <UContainer class="py-4">
        <div class="flex items-center justify-between">
          <UButton
            color="gray"
            variant="ghost"
            icon="i-heroicons-arrow-left"
            @click="goBack"
          >
            Back to Stories
          </UButton>

          <div class="flex items-center gap-4">
            <UButton
              color="gray"
              variant="ghost"
              icon="i-heroicons-arrow-path"
              @click="reloadStory"
            >
              Restart
            </UButton>
            
            <UButton
              color="gray"
              variant="ghost"
              :icon="isFullscreen ? 'i-heroicons-arrows-pointing-in' : 'i-heroicons-arrows-pointing-out'"
              @click="toggleFullscreen"
            >
              {{ isFullscreen ? 'Exit' : 'Fullscreen' }}
            </UButton>
          </div>
        </div>
      </UContainer>
    </div>

    <!-- Story Iframe Container -->
    <div 
      ref="containerRef"
      class="relative"
      :class="isFullscreen ? 'fixed inset-0 z-50 pt-16' : 'h-[calc(100vh-73px)]'"
    >
      <iframe
        ref="iframeRef"
        :src="storyUrl"
        class="w-full h-full border-0"
        :title="`Story: ${storyId}`"
        sandbox="allow-scripts allow-same-origin"
        @load="onStoryLoad"
      />

      <!-- Loading State -->
      <div
        v-if="isLoading"
        class="absolute inset-0 flex items-center justify-center bg-gray-900"
      >
        <div class="text-center">
          <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-500 mb-4 mx-auto" />
          <p class="text-gray-400">Loading story...</p>
        </div>
      </div>

      <!-- Error State -->
      <div
        v-if="hasError"
        class="absolute inset-0 flex items-center justify-center bg-gray-900"
      >
        <div class="text-center max-w-md px-4">
          <div class="text-6xl mb-4">😕</div>
          <h2 class="text-2xl font-bold text-white mb-2">Story Not Found</h2>
          <p class="text-gray-400 mb-6">
            This story hasn't been compiled yet or doesn't exist.
          </p>
          <UButton
            color="primary"
            @click="goBack"
          >
            Browse Other Stories
          </UButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const router = useRouter()

const storyId = computed(() => route.params.id as string)
const storyUrl = computed(() => `/stories/${storyId.value}.html`)

const iframeRef = ref<HTMLIFrameElement | null>(null)
const containerRef = ref<HTMLElement | null>(null)
const isLoading = ref(true)
const hasError = ref(false)
const isFullscreen = ref(false)

// Navigation
function goBack() {
  router.push('/')
}

function reloadStory() {
  if (iframeRef.value) {
    isLoading.value = true
    hasError.value = false
    iframeRef.value.src = iframeRef.value.src
  }
}

// Fullscreen handling
function toggleFullscreen() {
  if (!document.fullscreenElement) {
    containerRef.value?.requestFullscreen()
    isFullscreen.value = true
  } else {
    document.exitFullscreen()
    isFullscreen.value = false
  }
}

// Handle fullscreen change events
onMounted(() => {
  document.addEventListener('fullscreenchange', () => {
    isFullscreen.value = !!document.fullscreenElement
  })
})

// Iframe load handling
function onStoryLoad() {
  isLoading.value = false
  
  // Check if iframe loaded successfully or encountered 404
  try {
    const iframeDoc = iframeRef.value?.contentDocument
    if (!iframeDoc || iframeDoc.title === 'Error') {
      hasError.value = true
    }
  } catch (e) {
    // Cross-origin or other access error - assume it loaded fine
    console.log('Story loaded (cross-origin)')
  }
}

// Handle iframe errors
onMounted(() => {
  if (iframeRef.value) {
    iframeRef.value.addEventListener('error', () => {
      isLoading.value = false
      hasError.value = true
    })
  }
})

// Analytics hook (future: track when user starts story)
onMounted(() => {
  console.log(`Story started: ${storyId.value}`)
  // TODO: Send telemetry event
})

// Set page title
useHead({
  title: `Story: ${storyId.value} | StorySteps`
})
</script>
