<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900">
    <!-- Header -->
    <div class="bg-gradient-to-r from-purple-600 to-blue-600 text-white">
      <UContainer class="py-8">
        <div class="flex items-center justify-between">
          <div>
            <h1 class="text-3xl font-bold mb-2">Story Quiz</h1>
            <p class="text-purple-100">Review your journey and learn from your choices</p>
          </div>
          <UButton
            color="white"
            variant="outline"
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
        <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-500 mb-4 mx-auto" />
        <p class="text-gray-500 dark:text-gray-400 text-lg">Loading quiz...</p>
      </div>

      <!-- Quiz Results -->
      <div v-else class="max-w-4xl mx-auto space-y-8">
        <!-- Score Card -->
        <UCard>
          <div class="text-center py-6">
            <div class="text-6xl mb-4">{{ scoreEmoji }}</div>
            <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              Your Score: {{ score }}%
            </h2>
            <p class="text-gray-600 dark:text-gray-400">
              You got {{ correctAnswers }} out of {{ totalQuestions }} questions correct
            </p>
          </div>
        </UCard>

        <!-- Story Trace -->
        <div class="space-y-4">
          <h3 class="text-2xl font-bold text-gray-900 dark:text-white">Your Story Journey</h3>

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
                  class="mt-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800"
                >
                  <div class="flex gap-2">
                    <div class="text-blue-600 dark:text-blue-400 mt-0.5">💡</div>
                    <div>
                      <p class="text-sm font-semibold text-blue-900 dark:text-blue-100 mb-1">
                        Learning Point
                      </p>
                      <p class="text-sm text-blue-800 dark:text-blue-200">
                        {{ question.explanation }}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </UCard>
          </div>
        </div>

        <!-- Action Buttons -->
        <div class="flex gap-4 justify-center pt-6">
          <UButton
            color="gray"
            variant="outline"
            size="lg"
            @click="goBack"
          >
            Back to Stories
          </UButton>
          <UButton
            color="primary"
            size="lg"
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
    ? 'border-l-4 border-green-500'
    : 'border-l-4 border-red-500'
}

function getChoiceClass(choice: Choice, question: QuizQuestion) {
  const isUserAnswer = choice.id === question.userAnswer
  const isCorrectAnswer = choice.id === question.correctAnswer

  if (isUserAnswer && isCorrectAnswer) {
    return 'border-green-500 bg-green-50 dark:bg-green-900/20'
  } else if (isUserAnswer) {
    return 'border-red-500 bg-red-50 dark:bg-red-900/20'
  } else if (isCorrectAnswer) {
    return 'border-green-300 bg-green-50 dark:bg-green-900/10'
  }

  return 'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800'
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
