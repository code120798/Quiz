const question = document.querySelector('#question')
const choices = Array.from (document.querySelectorAll('.choice-text'))
const progressText = document.querySelector('#progressText')
const scoreText = document.querySelector('#score')
const progressBarFull = document.querySelector('#progressBarFull')

let currentQuestion = {}
let acceptingAnswers = true
let score = 0
let questionCounter = 0
let availableQuestions = []

let question = [
    {
        question: 'What is 2+2?',
        choice1: '2',
        choice2: '4',
        choice3: '21',
        choice4: '17',
        answer: 4
    }
    {
        question: 'What is 3+3?',
        choice1: '2',
        choice2: '6',
        choice3: '21',
        choice4: '17',
        answer: 6
    }
    {
        question: 'What is 4+4?',
        choice1: '2',
        choice2: '8',
        choice3: '21',
        choice4: '17',
        answer: 8
    }
    {
        question: 'What is 5+5?',
        choice1: '2',
        choice2: '10',
        choice3: '21',
        choice4: '17',
        answer: 10
    }
]
const SCORE_POINTS = 100