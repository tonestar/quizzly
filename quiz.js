console.log('hello');

'use strict';

const form = document.querySelector('.main-form');
const question = document.querySelector('.quiz-question');
const scoreBox = document.querySelector('.score');
const button = document.querySelector('button');
let score = 0;
let questionArray = [];
let choicesArray = [];
let answerArray = [];

const allQuestions = [
    {
        question: "Who is Prime Minister of the United Kingdom?",
        choices: ["David Cameron", "Gordon Brown", "Winston Churchill", "Tony Blair"],
        correctAnswer: 0
    },
    {
        question: "Who is Prime Minister of the United Kingdom?",
        choices: ["David Cameron", "Gordon Brown", "Winston Churchill", "Tony Blair"],
        correctAnswer: 0
    },
    {
        question: "Who is Prime Minister of the United Kingdom?",
        choices: ["David Cameron", "Gordon Brown", "Winston Churchill", "Tony Blair"],
        correctAnswer: 0
    },
    {
        question: "Who is Prime Minister of the United Kingdom?",
        choices: ["David Cameron", "Gordon Brown", "Winston Churchill", "Tony Blair"],
        correctAnswer: 0
    }
];

function readQuestion() {
    //read the question options and title out of an array
    allQuestions.forEach(function (obj, index) {
        questionArray.push(allQuestions[index].question);
        choicesArray.push(allQuestions[index].choices);
        answerArray.push(allQuestions[index].correctAnswer);
    });


    // Do we need to be getting all the things? Can we access the required question based on index, matching the index with the question based on a click?
}

function addQuestion() {
//add the question text
    question.innerHTML = questionArray[0];

    var p = `<p>Does this thing bloody well work?S?</p>`;
    document.body.appendChild(p);
    choicesArray[0].forEach(function(obj, index) {
        const inputThing = `<input type="radio" data-index=${index} id="item${index}">
                <label for="item${index}">${obj}</label>`;
        form.append(inputThing);
    });
//add the question options

}

//
// function populateList(plates = [], platesList) {
//     platesList.innerHTML = plates.map((plate, i) => {
//             return `
//             <li>
//                 <input type="checkbox" data-index=${i} id="item${i}" ${plate.done ? 'checked' : ''}/>
//                 <label for="item${i}">${plate.text}</label>
//             </li>
//           `;
// }).join('');
// }
function correctQuestion() {

    return true;
}

function nextQuestion() {
// use a click event to progress the quiz and to assign points

}
//show the number of question you're on

function scoreCounter() {
//for each correct answer, add 10 to the current score
//     if (correctQuestion) {
    score += 10;
    // }

    // update current score in span
    scoreBox.innerHTML = score;
}

//detect when the last question has been answered

//display final score

button.addEventListener('click', scoreCounter);