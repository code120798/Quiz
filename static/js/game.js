const question = document.querySelector('#question');
const choices = Array.from (document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');

let currentQuestion = {}
let acceptingAnswers = true
let score = 0
let questionCounter = 0
let availableQuestions = []

let questions = [
    {
        question: 'What is 2+2?',
        choice1: '2',
        choice2: '4',
        choice3: '21',
        choice4: '17',
        answer: 4,
    },
    {
        question: 'What is 3+3?',
        choice1: '2',
        choice2: '6',
        choice3: '21',
        choice4: '17',
        answer: 6,
    },
    {
        question: 'What is 4+4?',
        choice1: '2',
        choice2: '8',
        choice3: '21',
        choice4: '17',
        answer: 8,
    },
    {
        question: 'What is 5+5?',
        choice1: '2',
        choice2: '10',
        choice3: '21',
        choice4: '17',
        answer: 10,
    }
]
const SCORE_POINTS = 100
const MAX_QUESTIONS = 4

startGame = () => {
    questionCounter = 0
    score = 0
    availableQuestions = {...questions}
    getNewQuestion()
}
getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score)
        return window.location.assign('/end.html')
    }
    questionCounter++
    progressText.innerText = 'Question ${questionCounter} of ${MAX_QUESTIONS}'
    progressBarFull.style.width = '${(questionCounter/MAX_QUESTIONS) * 100}%'
    const questionIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionsIndex]
    question.innerText = currentQuestion.question

    choices.forEach(choice => {
        const number = choice.dataset['number']
        choice.innerText = currentQuestion['choice' + number]
    })
    availableQuestions.splice(questionsIndex, 1)
    acceptingAnswers = true
}

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if(acceptingAnswers) return
        acceptingAnswers = false
        const selectedchoice = e.target
        const selectedAnswer = selectedchoice.dataset['number']
        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect'
        if(classToApply === 'correct'){
            incrementScore(SCORE_POINTS)
        }
        selectedchoice.parentElement.classList.add(classToApply)
        setTimeout(() => {
            selectedchoice.parentElement.classList.remove(classToApply)
            getNewQuestion()
        }, 1000)
    })
})
incrementScore = num => {
    score +=num
    scoreText.innerText = score
}
startGame()