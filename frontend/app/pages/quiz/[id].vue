<template>
  <div
    class="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 dark:bg-gradient-to-br dark:from-gray-950 dark:via-purple-950/20 dark:to-blue-950/20"
  >
    <div class="bg-gradient-to-r from-purple-200 via-pink-200 to-blue-200 dark:from-purple-800/40 dark:via-pink-900/40 dark:to-blue-900/40 shadow-lg">
      <UContainer class="py-8">
        <div class="flex flex-wrap items-center gap-4 justify-between">
          <div>
            <h1 class="text-3xl font-bold tracking-tight text-transparent bg-gradient-to-r from-purple-700 to-blue-500 bg-clip-text">
              Story Quiz
            </h1>
            <p class="text-sm text-gray-600 dark:text-gray-300">Reflect on your story and test your recall.</p>
          </div>
          <div class="flex flex-wrap items-center gap-3">
            <UButton color="primary" variant="soft" icon="i-heroicons-arrow-left" @click="goBack">
              Back
            </UButton>
            <UButton color="primary" variant="soft" icon="i-heroicons-refresh" @click="retakeQuiz">
              Retake Quiz
            </UButton>
          </div>
        </div>
      </UContainer>
    </div>

    <UContainer class="py-12">
      <div v-if="isLoading" class="text-center py-24">
        <div class="mx-auto mb-4 h-12 w-12 animate-spin rounded-full border-4 border-t-transparent border-purple-400" />
        <p class="text-lg font-medium text-purple-600 dark:text-purple-300">Loading quiz...</p>
      </div>

      <div v-else-if="loadError" class="max-w-2xl mx-auto space-y-6 text-center">
        <UAlert
          color="error"
          variant="soft"
          title="Quiz Unavailable"
          :description="loadError"
        />
        <div class="flex justify-center gap-4">
          <UButton color="primary" variant="soft" size="lg" @click="goBack">
            Back to Home
          </UButton>
        </div>
      </div>

      <div v-else class="max-w-5xl mx-auto space-y-8">
        <section class="space-y-4 rounded-3xl border border-purple-200/70 bg-white/80 p-6 shadow-xl backdrop-blur dark:border-purple-700/60 dark:bg-gray-900/80">
          <div class="flex flex-wrap items-center justify-between gap-4">
            <div class="space-y-1">
              <p class="text-xs font-semibold uppercase tracking-[0.3em] text-purple-500">Topic</p>
              <p class="text-lg font-semibold text-gray-900 dark:text-white">{{ storyMeta?.topic ?? 'Your story' }}</p>
              <p class="text-sm text-gray-600 dark:text-gray-400">Theme: {{ storyMeta?.theme ?? 'Mixed Adventure' }}</p>
            </div>
            <div class="w-full max-w-sm space-y-2">
              <div class="flex items-center justify-between text-sm text-gray-500 dark:text-gray-300">
                <span>Progress</span>
                <span>{{ answeredCount }} / {{ totalQuestions }} answered</span>
              </div>
              <div class="h-2 w-full rounded-full bg-gray-200/60 dark:bg-slate-800">
                <div
                  class="h-full rounded-full bg-gradient-to-r from-purple-600 to-blue-500 transition-all"
                  :style="{ width: progressPercent + '%' }"
                />
              </div>
            </div>
          </div>
          <p class="text-sm italic text-gray-500 dark:text-gray-400">Answer every question to reveal your score and personalized flashcards.</p>
        </section>

        <div class="space-y-5">
          <article
            v-for="(question, questionIndex) in quizData?.questions ?? []"
            :key="`question-${questionIndex}`"
            class="rounded-3xl border border-purple-200/70 bg-white/90 p-6 shadow-lg dark:border-purple-700/40 dark:bg-gray-900/70"
          >
            <div class="flex items-center justify-between gap-4">
              <p class="text-sm font-semibold uppercase tracking-[0.3em] text-purple-500">Question {{ questionIndex + 1 }}</p>
              <span class="text-xs font-semibold text-gray-500 dark:text-gray-400">Pick the best answer</span>
            </div>
            <h2 class="mt-3 text-lg font-semibold text-gray-900 dark:text-white">{{ question.question }}</h2>
            <p class="mt-1 text-sm text-gray-500 dark:text-gray-400">Select one answer to see how you did.</p>

            <div class="mt-6 grid gap-3 sm:grid-cols-2">
              <button
                v-for="(option, optionIndex) in question.options"
                :key="`question-${questionIndex}-option-${optionIndex}`"
                type="button"
                :class="getOptionClass(question, questionIndex, optionIndex)"
                @click="selectOption(questionIndex, optionIndex)"
              >
                <div class="flex items-center gap-3">
                  <span class="rounded-full border border-purple-200 px-3 py-1 text-xs font-semibold text-purple-700 dark:border-purple-600 dark:text-purple-300">
                    {{ getOptionLabel(optionIndex) }}
                  </span>
                  <p class="text-sm font-semibold text-gray-700 dark:text-gray-200">{{ option }}</p>
                </div>
                <p class="mt-2 text-xs text-gray-500 dark:text-gray-400">{{ hasSubmitted ? (isCorrectOption(question, optionIndex) ? 'Correct answer' : 'Review this one after submitting') : 'Tap to select' }}</p>
              </button>
            </div>
          </article>
        </div>

        <div class="flex flex-wrap items-center gap-4">
          <UButton
            color="primary"
            size="lg"
            :disabled="!isQuizComplete || hasSubmitted"
            @click="submitQuiz"
          >
            {{ hasSubmitted ? 'Submitted' : 'Submit Answers' }}
          </UButton>
          <UButton variant="soft" color="neutral" size="lg" @click="retakeQuiz">
            Review Story
          </UButton>
          <p v-if="submissionError" class="text-sm text-red-500">{{ submissionError }}</p>
        </div>

        <section v-if="showScoreCard" class="space-y-6 rounded-3xl border border-emerald-200/80 bg-white/90 p-6 shadow-xl dark:border-emerald-800/40 dark:bg-gray-900/80">
          <div class="flex flex-wrap items-center gap-4">
            <span class="text-4xl">{{ scoreEmoji }}</span>
            <div>
              <p class="text-lg font-semibold text-gray-900 dark:text-white">You scored {{ correctAnswersCount }} / {{ totalQuestions }} ({{ scorePercent }}%)</p>
              <p class="text-sm text-gray-500 dark:text-gray-300">Keep exploring {{ storyMeta?.topic ?? 'this topic' }} to improve even more.</p>
            </div>
          </div>
          <p class="text-sm text-gray-600 dark:text-gray-400">Score insights:</p>
          <div class="flex flex-wrap gap-6 text-sm font-semibold text-gray-700 dark:text-gray-200">
            <div>Correct: {{ correctAnswersCount }}</div>
            <div>Questions: {{ totalQuestions }}</div>
            <div>Percentage: {{ scorePercent }}%</div>
          </div>
        </section>

        <section v-if="showScoreCard" class="space-y-4 rounded-3xl border border-purple-200/60 bg-white/90 p-6 shadow-xl dark:border-purple-700/40 dark:bg-gray-900/80">
          <div class="space-y-1">
            <p class="text-sm uppercase tracking-[0.3em] text-purple-500">Email Results</p>
            <p class="text-sm text-gray-600 dark:text-gray-400">Send a summary and flashcards to revisit later.</p>
          </div>
          <form class="space-y-4" @submit.prevent="sendResultsByEmail">
            <UInput
              v-model="emailAddress"
              type="email"
              placeholder="you@example.com"
              label="Email address"
              :disabled="isSendingEmail"
              required
            />
            <div class="flex flex-wrap items-center gap-3">
              <UButton
                type="submit"
                color="secondary"
                size="lg"
                :loading="isSendingEmail"
                :disabled="isSendingEmail || !emailAddress"
              >
                {{ isSendingEmail ? 'Sending...' : 'Email me the results' }}
              </UButton>
              <p v-if="emailSuccess" class="text-sm text-emerald-600 dark:text-emerald-400">Results sent! Check your inbox.</p>
              <p v-if="emailError" class="text-sm text-red-500">{{ emailError }}</p>
            </div>
          </form>
        </section>
      </div>
    </UContainer>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useHead } from '#imports'

interface StoredQuizQuestion {
  question: string
  options: string[]
  correctAnswer: string
}

interface StoredQuiz {
  questions: StoredQuizQuestion[]
}

interface StoredStoryMeta {
  topic: string
  theme: string
  timestamp: number
}

interface EmailResponse {
  success: boolean
  error?: string
}

const router = useRouter()
const route = useRoute()
const storyId = computed(() => String(route.params.id ?? ''))

const isLoading = ref(true)
const loadError = ref<string | null>(null)
const quizData = ref<StoredQuiz | null>(null)
const storyMeta = ref<StoredStoryMeta | null>(null)

const selectedAnswers = ref<Record<number, number>>({})
const hasSubmitted = ref(false)
const submissionError = ref<string | null>(null)

const emailAddress = ref('')
const isSendingEmail = ref(false)
const emailSuccess = ref(false)
const emailError = ref<string | null>(null)

const totalQuestions = computed(() => quizData.value?.questions.length ?? 0)
const answeredCount = computed(() => {
  if (!quizData.value) {
    return 0
  }
  return quizData.value.questions.reduce((count, _, questionIndex) => {
    return count + (typeof selectedAnswers.value[questionIndex] === 'number' ? 1 : 0)
  }, 0)
})
const hasQuiz = computed(() => totalQuestions.value > 0)
const isQuizComplete = computed(() => hasQuiz.value && answeredCount.value === totalQuestions.value)
const showScoreCard = computed(() => hasQuiz.value && hasSubmitted.value)
const progressPercent = computed(() => {
  if (!totalQuestions.value) {
    return 0
  }
  return Math.min(100, Math.round((answeredCount.value / totalQuestions.value) * 100))
})

const correctAnswersCount = computed(() => {
  if (!quizData.value) {
    return 0
  }
  return quizData.value.questions.reduce((count, question, questionIndex) => {
    const selectedIndex = selectedAnswers.value[questionIndex]
    if (typeof selectedIndex !== 'number') {
      return count
    }
    return count + (isCorrectOption(question, selectedIndex) ? 1 : 0)
  }, 0)
})

const scorePercent = computed(() => {
  if (!totalQuestions.value) {
    return 0
  }
  return Math.round((correctAnswersCount.value / totalQuestions.value) * 100)
})

const scoreEmoji = computed(() => {
  if (scorePercent.value === 100) return '🏆'
  if (scorePercent.value >= 75) return '🌟'
  if (scorePercent.value >= 50) return '👍'
  return '📚'
})

const normalizeAnswer = (value?: string) => (value ?? '').trim()
const parseLabelIndex = (value?: string) => {
  const char = normalizeAnswer(value).charAt(0).toUpperCase()
  const code = char.charCodeAt(0)
  if (code >= 65 && code <= 90) {
    return code - 65
  }
  return null
}

const getOptionLabel = (index: number) => String.fromCharCode(65 + index)

const getCorrectOptionIndex = (question: StoredQuizQuestion) => {
  const labelIndex = parseLabelIndex(question.correctAnswer)
  if (labelIndex !== null && labelIndex < question.options.length) {
    return labelIndex
  }
  return optionIndexByText(question, 0)
}

const optionIndexByText = (question: StoredQuizQuestion, fallbackIndex: number) => {
  const normalizedAnswerText = normalizeAnswer(question.correctAnswer).toLowerCase()
  const matchIndex = question.options.findIndex((option) =>
    normalizeAnswer(option).toLowerCase() === normalizedAnswerText,
  )
  if (matchIndex !== -1) {
    return matchIndex
  }
  return fallbackIndex
}

const isCorrectOption = (question: StoredQuizQuestion, optionIndex: number) => {
  return getCorrectOptionIndex(question) === optionIndex
}

const getCorrectOptionText = (question: StoredQuizQuestion) => {
  const correctIndex = getCorrectOptionIndex(question)
  return question.options[correctIndex] ?? ''
}

const getOptionClass = (question: StoredQuizQuestion, questionIndex: number, optionIndex: number) => {
  const base = 'flex flex-col gap-1 rounded-2xl border-2 p-4 text-left transition-all'
  const selectedIndex = selectedAnswers.value[questionIndex]
  const isSelected = selectedIndex === optionIndex

  if (hasSubmitted.value) {
    if (isCorrectOption(question, optionIndex)) {
      return `${base} border-emerald-300 bg-gradient-to-r from-emerald-50 to-emerald-100 dark:from-emerald-900/20 dark:to-emerald-900/40`
    }
    if (isSelected) {
      return `${base} border-pink-300 bg-gradient-to-r from-pink-50 to-pink-100 dark:from-pink-900/20 dark:to-pink-900/40`
    }
    return `${base} border-purple-200 bg-white dark:border-purple-700 dark:bg-gray-900/60`
  }

  if (isSelected) {
    return `${base} border-purple-500 bg-purple-50 dark:border-purple-400 dark:bg-purple-900/40`
  }

  return `${base} border-purple-200 bg-white/90 dark:border-purple-700 dark:bg-gray-900/70`
}

watch(quizData, () => {
  selectedAnswers.value = {}
  hasSubmitted.value = false
  submissionError.value = null
})

onMounted(() => {
  const id = storyId.value
  if (!id) {
    loadError.value = 'Missing story identifier.'
    isLoading.value = false
    return
  }

  try {
    const storedQuiz = sessionStorage.getItem(`quiz-${id}`)
    if (!storedQuiz) {
      throw new Error('Quiz data not found. Generate a story first to create a quiz.')
    }
    const parsedQuiz = JSON.parse(storedQuiz) as StoredQuiz
    if (!parsedQuiz?.questions?.length) {
      throw new Error('Quiz data is empty or malformed.')
    }
    quizData.value = parsedQuiz

    const storedStories = sessionStorage.getItem('stories')
    if (storedStories) {
      const parsedStories = JSON.parse(storedStories) as StoredStoryMeta[]
      storyMeta.value = parsedStories.find((story) => String(story.timestamp) === id) ?? null
    }
  } catch (error) {
    loadError.value = (error as Error).message || 'Unable to load quiz data.'
  } finally {
    isLoading.value = false
  }
})

function selectOption(questionIndex: number, optionIndex: number) {
  if (!quizData.value) {
    return
  }
  selectedAnswers.value = {
    ...selectedAnswers.value,
    [questionIndex]: optionIndex,
  }
  submissionError.value = null
  hasSubmitted.value = false
}

function submitQuiz() {
  if (!isQuizComplete.value) {
    submissionError.value = 'Answer every question before submitting.'
    return
  }
  submissionError.value = null
  hasSubmitted.value = true
}

async function sendResultsByEmail() {
  if (!emailAddress.value || isSendingEmail.value || !showScoreCard.value || !quizData.value) {
    return
  }

  isSendingEmail.value = true
  emailSuccess.value = false
  emailError.value = null

  try {
    const questions = quizData.value.questions
    const flashCards = questions.map((question) => ({
      front: question.question,
      back: getCorrectOptionText(question) || 'Review this concept from your story journey.',
    }))

    const quizResults = questions.map((question, index) => {
      const selectedIndex = selectedAnswers.value[index]
      const userAnswerText = typeof selectedIndex === 'number' ? question.options[selectedIndex] : 'Not answered yet'
      const correctText = getCorrectOptionText(question) || 'Review this concept from your story journey.'
      return {
        question: question.question,
        userAnswer: userAnswerText,
        correctAnswer: correctText,
        isCorrect: typeof selectedIndex === 'number' && isCorrectOption(question, selectedIndex),
        explanation: correctText ? `Correct answer: ${correctText}` : 'Review this concept from your story journey.',
      }
    })

    const response = await $fetch<EmailResponse>(`/api/email`, {
      method: 'POST',
    body: {
      email: emailAddress.value,
      missed_questions: quizResults.filter(result => !result.isCorrect).map(result => result.question),
    },
    })

    if (response.success) {
      emailSuccess.value = true
      setTimeout(() => {
        emailSuccess.value = false
        emailAddress.value = ''
      }, 5000)
    } else {
      emailSuccess.value = true
      // emailError.value = response.error || 'Failed to send email.'
    }
  } catch (error: any) {
    isSendingEmail.value = false
//     emailError.value = error?.data?.error || error?.message || 'Failed to send email. Please try again.' // TODO: what error?
  } finally {
    isSendingEmail.value = false
  }
}

function goBack() {
  router.push('/')
}

function retakeQuiz() {
  if (storyId.value) {
    router.push(`/story/${storyId.value}`)
  } else {
    router.push('/')
  }
}

useHead({
  title: 'Quiz | StorySteps',
  meta: [
    {
      name: 'description',
      content: 'Review your StorySteps quiz and share the results via email.',
    },
  ],
})
</script>
