<template>
  <div class="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 dark:bg-gradient-to-br dark:from-gray-900 dark:via-purple-900/20 dark:to-blue-900/20">
    <!-- Header -->
    <div class="bg-gradient-to-r from-pink-200 via-purple-200 to-blue-200 dark:from-pink-800/40 dark:via-purple-800/40 dark:to-blue-800/40 text-gray-800 dark:text-white shadow-lg">
      <UContainer class="py-8">
        <div class="flex items-center justify-between">
          <div>
            <h1 class="text-3xl font-bold mb-2 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent dark:from-purple-300 dark:to-blue-300">
              Story Quiz
            </h1>
            <p class="text-purple-700 dark:text-purple-200">Review your journey and learn from your choices</p>
          </div>
          <UButton
            color="purple"
            variant="soft"
            icon="i-heroicons-arrow-left"
            @click="goBack"
          >
            Back
          </UButton>
        </div>
      </UContainer>
    </div>

    <!-- Quiz Content -->
    <UContainer class="py-12">
      <!-- Loading State -->
      <div v-if="isLoading" class="text-center py-20">
        <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-400 mb-4 mx-auto" />
        <p class="text-purple-600 dark:text-purple-300 text-lg">Loading quiz...</p>
      </div>

      <!-- Quiz Results -->
      <div v-else class="max-w-4xl mx-auto space-y-8">
        <!-- Score Card -->
        <UCard class="bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 dark:from-pink-900/30 dark:via-purple-900/30 dark:to-blue-900/30 border-2 border-purple-200 dark:border-purple-700 shadow-xl">
          <div class="text-center py-6">
            <div class="text-6xl mb-4 animate-bounce">{{ scoreEmoji }}</div>
            <h2 class="text-3xl font-bold bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 bg-clip-text text-transparent dark:from-pink-400 dark:via-purple-400 dark:to-blue-400 mb-2">
              Your Score: {{ score }}%
            </h2>
            <p class="text-purple-700 dark:text-purple-300">
              You got {{ correctAnswers }} out of {{ totalQuestions }} questions correct
            </p>
          </div>
        </UCard>

        <!-- Story Trace -->
        <div class="space-y-4">
          <h3 class="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent dark:from-purple-300 dark:to-blue-300">
            Your Story Journey
          </h3>

          <div class="space-y-6">
            <UCard
              v-for="(question, index) in quizData.questions"
              :key="index"
              :class="getUserAnswerClass(question)"
            >
              <div class="space-y-4">
                <!-- Question Header -->
                <div class="flex items-start justify-between gap-4">
                  <div class="flex-1">
                    <div class="flex items-center gap-2 mb-2">
                      <span class="text-sm font-semibold text-gray-500 dark:text-gray-400">
                        Question {{ index + 1 }}
                      </span>
                      <UBadge
                        :color="question.userAnswer === question.correctAnswer ? 'green' : 'red'"
                        variant="soft"
                      >
                        {{ question.userAnswer === question.correctAnswer ? 'Correct' : 'Incorrect' }}
                      </UBadge>
                    </div>
                    <h4 class="text-lg font-semibold text-gray-900 dark:text-white">
                      {{ question.passage }}
                    </h4>
                  </div>
                  <div class="text-3xl">
                    {{ question.userAnswer === question.correctAnswer ? '✅' : '❌' }}
                  </div>
                </div>

                <!-- Choices -->
                <div class="space-y-2">
                  <div
                    v-for="(choice, choiceIndex) in question.choices"
                    :key="choiceIndex"
                    class="p-3 rounded-lg border-2 transition-all"
                    :class="getChoiceClass(choice, question)"
                  >
                    <div class="flex items-center justify-between">
                      <span class="font-medium">{{ choice.text }}</span>
                      <div class="flex gap-2">
                        <UBadge
                          v-if="choice.id === question.userAnswer"
                          color="blue"
                          variant="soft"
                          size="xs"
                        >
                          Your Choice
                        </UBadge>
                        <UBadge
                          v-if="choice.id === question.correctAnswer"
                          color="green"
                          variant="soft"
                          size="xs"
                        >
                          Best Answer
                        </UBadge>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Explanation -->
                <div
                  v-if="question.explanation"
                  class="mt-4 p-4 bg-gradient-to-r from-purple-50 via-blue-50 to-cyan-50 dark:from-purple-900/20 dark:via-blue-900/20 dark:to-cyan-900/20 rounded-lg border-2 border-purple-200 dark:border-purple-700"
                >
                  <div class="flex gap-2">
                    <div class="text-purple-600 dark:text-purple-400 mt-0.5">💡</div>
                    <div>
                      <p class="text-sm font-semibold bg-gradient-to-r from-purple-700 to-blue-700 bg-clip-text text-transparent dark:from-purple-300 dark:to-blue-300 mb-1">
                        Learning Point
                      </p>
                      <p class="text-sm text-purple-800 dark:text-purple-200">
                        {{ question.explanation }}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </UCard>
          </div>
        </div>

        <!-- Email Results Card -->
        <UCard class="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 border-2 border-purple-200 dark:border-purple-700">
          <div class="text-center">
            <div class="text-3xl mb-3">📧</div>
            <h3 class="text-lg font-bold text-purple-900 dark:text-purple-100 mb-2">
              Get Your Results & Flashcards by Email
            </h3>
            <p class="text-sm text-purple-700 dark:text-purple-300 mb-4">
              Receive a beautiful summary of your quiz results and study flashcards
            </p>
            <div class="flex gap-3 justify-center items-end">
              <div class="flex-1 max-w-xs">
                <UInput
                  v-model="emailAddress"
                  type="email"
                  placeholder="your@email.com"
                  size="lg"
                  :disabled="isSendingEmail"
                />
              </div>
              <UButton
                color="purple"
                size="lg"
                icon="i-heroicons-paper-airplane"
                :loading="isSendingEmail"
                :disabled="!emailAddress || isSendingEmail"
                @click="sendResultsByEmail"
              >
                Send
              </UButton>
            </div>
            <UAlert
              v-if="emailSuccess"
              color="green"
              variant="soft"
              title="Email Sent!"
              description="Check your inbox for your quiz results and flashcards"
              class="mt-4"
            />
            <UAlert
              v-if="emailError"
              color="red"
              variant="soft"
              title="Failed to Send"
              :description="emailError"
              class="mt-4"
              :close-button="{ icon: 'i-heroicons-x-mark-20-solid', color: 'red', variant: 'link' }"
              @close="emailError = null"
            />
          </div>
        </UCard>

        <!-- Action Buttons -->
        <div class="flex gap-4 justify-center pt-6">
          <UButton
            color="purple"
            variant="soft"
            size="lg"
            @click="goBack"
          >
            Back to Stories
          </UButton>
          <UButton
            color="purple"
            variant="solid"
            size="lg"
            class="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600"
            @click="retakeQuiz"
          >
            Try Another Story
          </UButton>
        </div>
      </div>
    </UContainer>
  </div>
</template>

<script setup lang="ts">
interface Choice {
  id: string
  text: string
  target: string
}

interface QuizQuestion {
  passage: string
  choices: Choice[]
  userAnswer: string
  correctAnswer: string
  explanation: string
}

interface QuizData {
  storyId: string
  storyTitle: string
  questions: QuizQuestion[]
}

const router = useRouter()
const route = useRoute()
const isLoading = ref(true)

// Email state
const emailAddress = ref('')
const isSendingEmail = ref(false)
const emailSuccess = ref(false)
const emailError = ref<string | null>(null)

// Mock quiz data - replace with actual API call
const quizData = ref<QuizData>({
  storyId: 'demo',
  storyTitle: 'The Water Cycle Adventure',
  questions: [
    {
      passage: 'Start: Learning About Water',
      choices: [
        { id: 'evaporation', text: 'Learn about Evaporation first', target: 'Evaporation' },
        { id: 'condensation', text: 'Learn about Condensation first', target: 'Condensation' },
      ],
      userAnswer: 'condensation',
      correctAnswer: 'evaporation',
      explanation: 'Starting with evaporation helps you understand the natural sequence of the water cycle, as it\'s the first step where water transforms from liquid to vapor.'
    },
    {
      passage: 'Evaporation: Understanding Heat',
      choices: [
        { id: 'skip', text: 'Skip to precipitation', target: 'Precipitation' },
        { id: 'condensation', text: 'Continue to condensation', target: 'Condensation' },
      ],
      userAnswer: 'condensation',
      correctAnswer: 'condensation',
      explanation: 'Great choice! Following the natural order helps reinforce the cyclical nature of the water cycle.'
    },
    {
      passage: 'Condensation: Cloud Formation',
      choices: [
        { id: 'review', text: 'Review evaporation again', target: 'Evaporation' },
        { id: 'precipitation', text: 'Learn about precipitation', target: 'Precipitation' },
      ],
      userAnswer: 'precipitation',
      correctAnswer: 'precipitation',
      explanation: 'Perfect! Moving forward in the cycle demonstrates understanding of the sequential process.'
    },
    {
      passage: 'Precipitation: Rain and Snow',
      choices: [
        { id: 'collection', text: 'See how water collects', target: 'Collection' },
        { id: 'end', text: 'End the lesson', target: 'End' },
      ],
      userAnswer: 'end',
      correctAnswer: 'collection',
      explanation: 'Completing the full cycle by learning about collection would have shown the complete journey of water in nature.'
    }
  ]
})

// Calculate score
const totalQuestions = computed(() => quizData.value.questions.length)
const correctAnswers = computed(() =>
  quizData.value.questions.filter(q => q.userAnswer === q.correctAnswer).length
)
const score = computed(() =>
  Math.round((correctAnswers.value / totalQuestions.value) * 100)
)

const scoreEmoji = computed(() => {
  if (score.value === 100) return '🏆'
  if (score.value >= 75) return '🌟'
  if (score.value >= 50) return '👍'
  return '📚'
})

// Load quiz data
onMounted(async () => {
  // Try to fetch quiz data from API
  try {
    // TODO: Replace with actual API call
    // const response = await $fetch('/api/quiz', {
    //   query: {
    //     storyId: route.query.storyId,
    //     trace: route.query.trace
    //   }
    // })
    // quizData.value = response

    // For now, use mock data
    await new Promise(resolve => setTimeout(resolve, 500))
  } catch (error) {
    console.error('Failed to load quiz data, using mock data:', error)
  } finally {
    isLoading.value = false
  }
})

function getUserAnswerClass(question: QuizQuestion) {
  const isCorrect = question.userAnswer === question.correctAnswer
  return isCorrect
    ? 'border-l-4 border-emerald-300 bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20'
    : 'border-l-4 border-pink-300 bg-gradient-to-r from-pink-50 to-rose-50 dark:from-pink-900/20 dark:to-rose-900/20'
}

function getChoiceClass(choice: Choice, question: QuizQuestion) {
  const isUserAnswer = choice.id === question.userAnswer
  const isCorrectAnswer = choice.id === question.correctAnswer

  if (isUserAnswer && isCorrectAnswer) {
    return 'border-emerald-300 bg-gradient-to-r from-emerald-100 to-teal-100 dark:from-emerald-900/30 dark:to-teal-900/30 shadow-md'
  } else if (isUserAnswer) {
    return 'border-pink-300 bg-gradient-to-r from-pink-100 to-rose-100 dark:from-pink-900/30 dark:to-rose-900/30 shadow-md'
  } else if (isCorrectAnswer) {
    return 'border-emerald-200 bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20'
  }

  return 'border-purple-200 dark:border-purple-700 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm'
}

async function sendResultsByEmail() {
  if (!emailAddress.value || isSendingEmail.value) return

  isSendingEmail.value = true
  emailSuccess.value = false
  emailError.value = null

  try {
    // Generate flashcards from quiz data
    const flashCards = quizData.value.questions.map(q => ({
      front: q.passage,
      back: q.explanation || 'Review this concept from your story journey.'
    }))

    // Prepare quiz results
    const quizResults = quizData.value.questions.map(q => ({
      question: q.passage,
      userAnswer: q.choices.find(c => c.id === q.userAnswer)?.text || q.userAnswer,
      correctAnswer: q.choices.find(c => c.id === q.correctAnswer)?.text || q.correctAnswer,
      isCorrect: q.userAnswer === q.correctAnswer,
      explanation: q.explanation
    }))

    // Send to backend
    const response = await $fetch('/api/send-quiz-results', {
      method: 'POST',
      body: {
        recipientEmail: emailAddress.value,
        storyTitle: quizData.value.storyTitle,
        score: score.value,
        totalQuestions: totalQuestions.value,
        correctAnswers: correctAnswers.value,
        quizResults,
        flashCards
      }
    })

    if (response.success) {
      emailSuccess.value = true
      // Clear email after 5 seconds
      setTimeout(() => {
        emailSuccess.value = false
        emailAddress.value = ''
      }, 5000)
    } else {
      emailError.value = response.error || 'Failed to send email'
    }
  } catch (error: any) {
    console.error('Failed to send email:', error)
    emailError.value = error.data?.error || error.message || 'Failed to send email. Please try again.'
  } finally {
    isSendingEmail.value = false
  }
}

function goBack() {
  router.push('/')
}

function retakeQuiz() {
  router.push('/')
}

// Set page title
useHead({
  title: 'Quiz Results | StorySteps'
})
</script>
