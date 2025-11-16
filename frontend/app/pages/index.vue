<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-blue-50 dark:bg-gradient-to-br dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
    <!-- Loading Screen Overlay - Agent Conversation -->
    <Transition
      enter-active-class="transition-opacity duration-300"
      leave-active-class="transition-opacity duration-300"
      enter-from-class="opacity-0"
      leave-to-class="opacity-0"
    >
      <div
        v-if="isGenerating"
        class="fixed inset-0 z-50 flex items-center justify-center bg-white/95 dark:bg-gray-950/95 backdrop-blur-sm"
      >
        <div class="max-w-2xl w-full px-6">
          <div class="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-800 p-8">
            <!-- Header -->
            <div class="text-center mb-8">
              <div class="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 mb-4">
                <svg class="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                AI Agents at Work
              </h3>
              <p class="text-gray-600 dark:text-gray-400">
                Watch our specialized agents collaborate to craft your story
              </p>
            </div>

            <!-- Agent Conversation Feed -->
            <div ref="feedContainer" class="space-y-3 mb-6 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
              <TransitionGroup
                enter-active-class="transition-all duration-300"
                enter-from-class="opacity-0 translate-y-2"
                leave-active-class="transition-all duration-200"
                leave-to-class="opacity-0"
              >
                <div
                  v-for="message in agentMessages"
                  :key="message.id"
                  class="flex items-start gap-3"
                >
                  <!-- Agent Avatar -->
                  <div
                    class="relative flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold shadow-md"
                    :class="message.agentColor"
                  >
                    {{ message.agentInitial }}
                    <div
                      v-if="message.isActive"
                      class="absolute w-10 h-10 rounded-full animate-ping opacity-30"
                      :class="message.agentColor"
                    />
                  </div>

                  <!-- Message Content -->
                  <div class="flex-1 min-w-0">
                    <div class="flex items-center gap-2 mb-1">
                      <span class="text-sm font-semibold text-gray-900 dark:text-white">
                        {{ message.agentName }}
                      </span>
                      <span
                        v-if="message.isActive"
                        class="flex items-center gap-1 text-xs text-purple-600 dark:text-purple-400"
                      >
                        <span class="relative flex h-2 w-2">
                          <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75" />
                          <span class="relative inline-flex rounded-full h-2 w-2 bg-purple-500" />
                        </span>
                        thinking...
                      </span>
                    </div>
                    <div
                      class="text-sm text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-800 rounded-lg px-3 py-2 border border-gray-200 dark:border-gray-700"
                      :class="{ 'opacity-50': message.isActive && !message.content }"
                    >
                      {{ message.content || '...' }}
                    </div>
                  </div>
                </div>
              </TransitionGroup>
            </div>

            <!-- Time Estimate -->
            <div class="text-center pt-4 border-t border-gray-200 dark:border-gray-800">
              <p class="text-xs text-gray-500 dark:text-gray-500">
                ⏱️ This usually takes 1-2 minutes
              </p>
            </div>
          </div>
        </div>
      </div>
    </Transition>
    <!-- Story Generator + Stories Tiles -->
    <UContainer class="py-12">
      <div class="max-w-6xl mx-auto">
        <div class="text-center lg:text-left mb-6">
          <p class="text-sm text-gray-500 dark:text-gray-400">
            Tile your past adventures around the prompt box to spark new ideas.
          </p>
        </div>
        <div class="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.5fr)_minmax(0,1fr)] items-start">
          <div
            v-if="leftStories.length"
            class="hidden lg:flex flex-col gap-4 order-3 lg:order-1"
          >
            <div class="text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">
              Previous Stories
            </div>
            <button
              v-for="item in leftStories"
              :key="`left-${item.story.timestamp ?? item.index}`"
              :class="[storyCardClasses, storyCardHoverClasses]"
              @click="viewStoredStory(item.story, item.index)"
            >
              <div class="flex items-start gap-4">
                <div class="text-3xl group-hover:scale-110 transition-transform">
                  📖
                </div>
                <div class="flex-1 min-w-0">
                  <h4 class="text-base font-bold text-gray-900 dark:text-white mb-1 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                    {{ item.story.topic }}
                  </h4>
                  <p class="text-sm text-gray-600 dark:text-gray-400">
                    Theme: <span class="font-medium">{{ item.story.theme }}</span>
                  </p>
                </div>
                <svg class="w-5 h-5 text-gray-400 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </button>
          </div>

          <div class="order-1 lg:order-2 space-y-8">
            <div class="bg-white dark:bg-gray-900 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-800 overflow-hidden">
              <!-- Header -->
              <div class="bg-gradient-to-br from-gray-50 to-purple-50/30 dark:from-gray-800 dark:to-purple-950/20 px-8 py-6 border-b border-gray-200 dark:border-gray-800">
                <div class="text-center">
                  <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    Create Your Story
                  </h2>
                  <p class="text-gray-600 dark:text-gray-400 text-sm">
                    Choose a topic and theme to generate an interactive learning experience
                  </p>
                </div>
              </div>

              <!-- Form -->
              <form @submit.prevent="generateStory" class="p-8 space-y-6">
                <!-- Topic Input -->
                <div class="space-y-3">
                  <label class="block text-sm font-semibold text-gray-900 dark:text-white">
                    What do you want to learn about?
                  </label>
                  <UInput
                    v-model="topic"
                    placeholder="e.g., Photosynthesis, Fractions, Water Cycle"
                    size="xl"
                    :disabled="isGenerating"
                    required
                    class="shadow-sm"
                  />
                  <p class="text-sm text-gray-500 dark:text-gray-500">
                    Enter any educational topic you're curious about
                  </p>
                </div>

                <!-- Theme Input -->
                <div class="space-y-3">
                  <label class="block text-sm font-semibold text-gray-900 dark:text-white">
                    Choose a story theme
                  </label>
                  <UInput
                    v-model="theme"
                    placeholder="e.g., Jack and the Giant, Space Adventure, Detective Mystery"
                    size="xl"
                    :disabled="isGenerating"
                    required
                    class="shadow-sm"
                  />
                  <p class="text-sm text-gray-500 dark:text-gray-500">
                    Pick a fun theme to make learning engaging
                  </p>
                </div>

                <!-- Generate Button -->
                <UButton
                  type="submit"
                  size="xl"
                  block
                  :disabled="!topic || !theme || isGenerating"
                  class="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-200"
                >
                  <span class="flex items-center justify-center gap-2">
                    <svg v-if="!isGenerating" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    {{ isGenerating ? 'Generating...' : 'Generate Story' }}
                  </span>
                </UButton>
              </form>

              <!-- Error Display -->
              <div v-if="error" class="px-8 pb-8">
                <UAlert
                  color="error"
                  variant="soft"
                  title="Generation Failed"
                  :description="error"
                  :close-button="{ icon: 'i-heroicons-x-mark-20-solid', color: 'red', variant: 'link' }"
                  @close="error = null"
                />
              </div>
            </div>

            <!-- Examples Section -->
            <div class="space-y-6">
              <div class="text-center mb-2">
                <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  Need inspiration?
                </h3>
                <p class="text-gray-600 dark:text-gray-400 text-sm">
                  Try one of these popular combinations
                </p>
              </div>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <button
                  v-for="example in examples"
                  :key="example.topic"
                  @click="useExample(example)"
                  :disabled="isGenerating"
                  class="group bg-white dark:bg-gray-900 rounded-xl shadow-md hover:shadow-xl border border-gray-200 dark:border-gray-800 p-5 transition-all duration-200 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 text-left"
                  :class="example.borderColorHover"
                >
                  <div class="flex items-start gap-4">
                    <div class="text-3xl group-hover:scale-110 transition-transform">
                      {{ example.emoji }}
                    </div>
                    <div class="flex-1 min-w-0">
                      <h4 class="text-base font-bold text-gray-900 dark:text-white mb-1 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                        {{ example.topic }}
                      </h4>
                      <p class="text-sm text-gray-600 dark:text-gray-400">
                        Theme: <span class="font-medium">{{ example.theme }}</span>
                      </p>
                    </div>
                    <svg class="w-5 h-5 text-gray-400 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </button>
              </div>
            </div>

            <div v-if="hasStoredStories" class="space-y-4 lg:hidden">
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                Your Previous Stories
              </h3>
              <div class="space-y-4">
                <button
                  v-for="item in indexedStories"
                  :key="`mobile-${item.story.timestamp ?? item.index}`"
                  :class="[storyCardClasses, storyCardHoverClasses]"
                  @click="viewStoredStory(item.story, item.index)"
                >
                  <div class="flex items-start gap-4">
                    <div class="text-3xl group-hover:scale-110 transition-transform">
                      📖
                    </div>
                    <div class="flex-1 min-w-0">
                      <h4 class="text-base font-bold text-gray-900 dark:text-white mb-1 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                        {{ item.story.topic }}
                      </h4>
                      <p class="text-sm text-gray-600 dark:text-gray-400">
                        Theme: <span class="font-medium">{{ item.story.theme }}</span>
                      </p>
                    </div>
                    <svg class="w-5 h-5 text-gray-400 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </button>
              </div>
            </div>
          </div>

          <div
            v-if="rightStories.length"
            class="hidden lg:flex flex-col gap-4 order-4 lg:order-3"
          >
            <div class="text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">
              Previous Stories
            </div>
            <button
              v-for="item in rightStories"
              :key="`right-${item.story.timestamp ?? item.index}`"
              :class="[storyCardClasses, storyCardHoverClasses]"
              @click="viewStoredStory(item.story, item.index)"
            >
              <div class="flex items-start gap-4">
                <div class="text-3xl group-hover:scale-110 transition-transform">
                  📖
                </div>
                <div class="flex-1 min-w-0">
                  <h4 class="text-base font-bold text-gray-900 dark:text-white mb-1 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                    {{ item.story.topic }}
                  </h4>
                  <p class="text-sm text-gray-600 dark:text-gray-400">
                    Theme: <span class="font-medium">{{ item.story.theme }}</span>
                  </p>
                </div>
                <svg class="w-5 h-5 text-gray-400 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </button>
          </div>
        </div>
      </div>
    </UContainer>
  </div>
</template>

<script setup lang="ts">
import { computed, onUnmounted, ref, watch, nextTick } from "vue";

const BACKEND_ORIGIN = import.meta.env.VITE_BACKEND_ORIGIN ?? "http://localhost:3001";

interface AgentMessage {
  id: number
  agentName: string
  agentInitial: string
  agentColor: string
  content: string
  isActive: boolean
}

type StoredStory = {
  topic: string
  theme: string
  timestamp: number
}

const topic = ref('')
const theme = ref('')
const isGenerating = ref(false)
const error = ref<string | null>(null)
const agentMessages = ref<AgentMessage[]>([])
const streamId = ref('')
let eventSource: EventSource | null = null
let messageId = 0
const initialStories = (JSON.parse(sessionStorage.getItem('stories') || '[]') as StoredStory[])
const storedStories = ref<StoredStory[]>(initialStories)
const indexedStories = computed(() => storedStories.value.map((story, index) => ({ story, index })))
const leftStories = computed(() => indexedStories.value.filter((item) => item.index % 2 === 0))
const rightStories = computed(() => indexedStories.value.filter((item) => item.index % 2 === 1))
const hasStoredStories = computed(() => storedStories.value.length > 0)
const storyCardClasses = 'group bg-white dark:bg-gray-900 rounded-xl shadow-md hover:shadow-xl border border-gray-200 dark:border-gray-800 p-5 transition-all duration-200 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 text-left'
const storyCardHoverClasses = 'hover:border-purple-300 dark:hover:border-purple-700'

const examples = [
  {
    topic: 'Photosynthesis',
    theme: 'Jack and the Giant Beanstalk',
    emoji: '🌱',
    borderColorHover: 'hover:border-green-300 dark:hover:border-green-700'
  },
  {
    topic: 'Fractions',
    theme: 'Pizza Party',
    emoji: '🍕',
    borderColorHover: 'hover:border-orange-300 dark:hover:border-orange-700'
  },
  {
    topic: 'Water Cycle',
    theme: 'Adventure Around the World',
    emoji: '💧',
    borderColorHover: 'hover:border-blue-300 dark:hover:border-blue-700'
  },
  {
    topic: 'Gravity',
    theme: 'Space Detective',
    emoji: '🔍',
    borderColorHover: 'hover:border-purple-300 dark:hover:border-purple-700'
  }
]

const nodeAgentMetadata: Record<string, { agentName: string; agentInitial: string; agentColor: string }> = {
  retrieveDocs: { agentName: 'Doc Retriever', agentInitial: 'D', agentColor: 'bg-teal-500 text-white' },
  brainstormConcepts: { agentName: 'IdeaSmith', agentInitial: 'I', agentColor: 'bg-purple-500 text-white' },
  writerOutline: { agentName: 'StoryWriter', agentInitial: 'S', agentColor: 'bg-indigo-500 text-white' },
  featureMuse: { agentName: 'MechanicsMuse', agentInitial: 'M', agentColor: 'bg-pink-500 text-white' },
  developerReview: { agentName: 'BuilderBot', agentInitial: 'B', agentColor: 'bg-emerald-500 text-white' },
  writerApproval: { agentName: 'Narrative Lead', agentInitial: 'N', agentColor: 'bg-blue-600 text-white' },
  featureRewrite: { agentName: 'Mechanics Muse', agentInitial: 'R', agentColor: 'bg-orange-500 text-white' },
  planPassages: { agentName: 'PassagePlanner', agentInitial: 'P', agentColor: 'bg-cyan-500 text-white' },
  lintPassages: { agentName: 'LintCheck', agentInitial: 'L', agentColor: 'bg-slate-500 text-white' },
  fixPassages: { agentName: 'LintFixer', agentInitial: 'F', agentColor: 'bg-amber-500 text-white' }
}

const appendAgentMessages = (node: string, messages: string[]) => {
  if (!messages || messages.length === 0) {
    return
  }
  const meta = nodeAgentMetadata[node] ?? {
    agentName: node,
    agentInitial: node.charAt(0).toUpperCase() ?? 'A',
    agentColor: 'bg-gray-500 text-white'
  }
  messages.forEach((message) => {
    agentMessages.value.push({
      id: messageId++,
      agentName: meta.agentName,
      agentInitial: meta.agentInitial,
      agentColor: meta.agentColor,
      content: message,
      isActive: false
    })
  })
}

const closeStream = () => {
  if (eventSource) {
    eventSource.close()
    eventSource = null
  }
}

const openStream = () => {
  closeStream()
  streamId.value = globalThis.crypto?.randomUUID?.() ?? `${Date.now()}-${Math.random()}`
  eventSource = new EventSource(`/api/generate?streamId=${encodeURIComponent(streamId.value)}`)
  eventSource.addEventListener("graph", (event) => {
    try {
      const payload = JSON.parse(event.data)
      console.debug("agent stream", payload)
      appendAgentMessages(payload.node, payload.messages ?? [])
    } catch (err) {
      console.error("Failed to parse agent stream event", err)
    }
  })
  eventSource.onerror = () => {
    closeStream()
  }
}

onUnmounted(() => {
  closeStream()
})


function useExample(example: typeof examples[0]) {
  if (isGenerating.value) return
  topic.value = example.topic
  theme.value = example.theme
}

function viewStoredStory(story: any, index: number) {
  // Save the story index or timestamp for retrieval in the viewer
  sessionStorage.setItem('lastViewedStory', String(index))
  navigateTo(`/story/${story.timestamp}`)
}

async function generateStory() {
  if (!topic.value || !theme.value) {
    return
  }
  isGenerating.value = true
  error.value = null
  agentMessages.value = []
  messageId = 0
  openStream()

  try {
    const response = await fetch(`/api/generate`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        prompt: topic.value,
        theme: theme.value,
        streamId: streamId.value
      })
    })

    if (!response.ok) {
      throw new Error('Failed to generate story. Please try again.')
    }

    type GenerateResponse = {
      html: string
      quiz: {
        questions: {
          question: string
          options: string[]
          correctAnswer: string
        }[]
      }
    }

    const {html, quiz} = await response.json() as GenerateResponse
    const date = Date.now()

    sessionStorage.getItem('stories')
    const stories = JSON.parse(sessionStorage.getItem('stories') || '[]') as StoredStory[]
    stories.push({ topic: topic.value, theme: theme.value, timestamp: date })
    sessionStorage.setItem('stories', JSON.stringify(stories))
    storedStories.value = stories
    sessionStorage.setItem(`story-${date}`, html)
    sessionStorage.setItem(`quiz-${date}`, JSON.stringify(quiz))

    agentMessages.value.push({
      id: messageId++,
      agentName: 'System',
      agentInitial: '✓',
      agentColor: 'bg-gradient-to-br from-green-500 to-emerald-500 text-white',
      content: '🎉 Story generation complete! Redirecting to the viewer.',
      isActive: false
    })

    navigateTo('/story/' + stories[stories.length - 1].timestamp)
  } catch (err) {
    error.value = (err as Error).message || 'Failed to generate story. Please try again.'
  } finally {
    closeStream()
    isGenerating.value = false
  }
}
</script>

<style scoped>
.custom-scrollbar::-webkit-scrollbar {
  width: 6px;
}

.custom-scrollbar::-webkit-scrollbar-track {
  background-color: rgb(243 244 246);
  border-radius: 9999px;
}

:global(.dark) .custom-scrollbar::-webkit-scrollbar-track {
  background-color: rgb(31 41 55);
}

.custom-scrollbar::-webkit-scrollbar-thumb {
  background-color: rgb(209 213 219);
  border-radius: 9999px;
}

:global(.dark) .custom-scrollbar::-webkit-scrollbar-thumb {
  background-color: rgb(75 85 99);
}

.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background-color: rgb(156 163 175);
}

:global(.dark) .custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background-color: rgb(107 114 128);
}
</style>
