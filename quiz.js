
'use strict';

const quizSteps = [
    {
        question: "Who is Prime Minister of New Zealand?",
        choices: ["John Key", "Jacinda Ardern", "Bill English", "Chris Warner"],
        correctAnswer: 2
    },
    {
        question: "Who is the Mayor of Wellington?",
        choices: ["Justin Lester", "Blanketman RIP", "Ewen Chatfield", "Peter Jackson"],
        correctAnswer: 1
    },
    {
        question: "Who is a fish?",
        choices: ["Roger", "Bruce", "Carp", "Frank"],
        correctAnswer: 3
    },
    {
        question: "What's the best Pizza place in Wellington?",
        choices: ["Scopa", "Heaven", "Tommy Millions", "Mr Bun"],
        correctAnswer: 3
    }
];

const formEl = document.querySelector('.main-form');
const questionEl = document.querySelector('.quiz-question');
const scoreBoxEl = document.querySelector('.score');
const buttonEl = document.querySelector('button');
let quizStepIndex = 0;
let score = 0;

function checkAnswer(userAnswer, quizStep) {
    return parseInt(userAnswer, 10) == quizStep.correctAnswer;
}

function getUserAnswer() {
    return formEl.querySelector('input:checked').value;
}

function getCurrentQuizstep() {
    return quizSteps[quizStepIndex];
}

function countScore() {
    score += 10;
}

function goToNextQuestion() {
    if (!checkFinished()) {
        quizStepIndex += 1;
    }
}

function clearStep() {
    formEl.innerHTML = '';
}

function checkFinished() {
    return quizStepIndex == quizSteps.length;
}

function renderQuestion(quizStep) {
    questionEl.innerHTML = quizStep.question;

    quizStep.choices.forEach(function(questionText, index) {
        const inputThing = `<input 
                                type="radio" 
                                data-index=${index} 
                                id="item${index}" 
                                value="${index}">
                            <label for="item${index}">${questionText}</label>
                            <br>`;
        formEl.innerHTML += inputThing;
    });
}

function finishQuiz() {
    scoreBoxEl.innerHTML = score;
}

function processAnswer() {
    if (checkAnswer(getUserAnswer(), getCurrentQuizstep())) {
        countScore();
    }
    goToNextQuestion();
    clearStep();
    if (!checkFinished()) {
        renderQuestion(getCurrentQuizstep());
    } else {
        finishQuiz();
    }
}

buttonEl.addEventListener('click', processAnswer);
renderQuestion(getCurrentQuizstep());