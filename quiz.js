console.log('hello');

'use strict';

const formEl = document.querySelector('.main-form');
const questionEl = document.querySelector('.quiz-question');
const scoreBoxEl = document.querySelector('.score');
const buttonEl = document.querySelector('button');
let numberQuestion = 0;
let score = 0;

const allQuestions = [
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

function renderQuestion(quizStep) {
//add the question text

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


function checkAnswer(userAnswer, quizStep) {
    return userAnswer == quizStep.correctAnswer;
}


function getCurrentQuizstep() {
    return allQuestions[numberQuestion];
}

function goToNextQuestion() {
// use a click event to progress the quiz and to assign points
    const totalQuestions = allQuestions.length;

    if (numberQuestion < totalQuestions ) {
        numberQuestion += 1;
    }
}

function getUserAnswer() {
    return formEl.querySelector('input:checked').value;
}

//show the number of question you're on

function countScore() {
    score += 10;
}


function processAnswer() {

    if (checkAnswer(getUserAnswer(), getCurrentQuizstep())) {
        countScore();
    }
    goToNextQuestion();
    renderQuestion(getCurrentQuizstep());

}
//detect when the last question has been answered

//display final score

buttonEl.addEventListener('click', processAnswer);

renderQuestion(getCurrentQuizstep());