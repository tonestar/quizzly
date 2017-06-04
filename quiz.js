console.log('hello');

'use strict';

const quizSteps = [
    {
        question: "Who is Prime Minister of the United Kingdom?",
        choices: ["David Cameron", "Gordon Brown", "Winston Churchill", "Tony Blair"],
        correctAnswer: 0
    },
    {
        question: "Who is Poo?",
        choices: ["You", "Who", "Schmoo", "Tony Blair"],
        correctAnswer: 1
    },
    {
        question: "Who is a fish?",
        choices: ["Anus", "Bnus", "Carp", "Pnus"],
        correctAnswer: 3
    },
    {
        question: "jadflva",
        choices: ["Yes", "No", "Yeessssssssssss", "Still not Tony Blair"],
        correctAnswer: 2
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
    const inputName = "question[0]";
    questionEl.innerHTML = quizStep.question;

    quizStep.choices.forEach(function(questionText, index) {
        const inputThing = `<input 
                                type="radio" 
                                data-index=${index} 
                                id="item${index}" 
                                name="${inputName}"
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
