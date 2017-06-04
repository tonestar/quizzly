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
        correctAnswer: 0
    },
    {
        question: "Who is a fish?",
        choices: ["Anus", "Bnus", "Carp", "Pnus"],
        correctAnswer: 0
    },
    {
        question: "jadflva",
        choices: ["Yes", "No", "Yeessssssssssss", "Still not Tony Blair"],
        correctAnswer: 0
    }
];

// function readQuestion() {
//     //read the question options and title out of an array
//     allQuestions.forEach(function (obj, index) {
//         questionArray.push(allQuestions[index].question);
//         choicesArray.push(allQuestions[index].choices);
//         answerArray.push(allQuestions[index].correctAnswer);
//     });
//
//
//     // Do we need to be getting all the things? Can we access the required question based on index, matching the index with the question based on a click?
// }

function renderQuestion(currentQuestion) {
//add the question text

    const inputName = "question[0]";
    questionEl.innerHTML = currentQuestion.question;

    currentQuestion.choices.forEach(function(questionText, index) {
        const inputThing = `<input 
                                type="radio" 
                                data-index=${index} 
                                id="item${index}" 
                                name="${inputName}">
                            <label for="item${index}">${questionText}</label>
                            <br>`;
        formEl.innerHTML += inputThing;
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
    const totalQuestions = allQuestions.length;

    if (numberQuestion < totalQuestions ) {
        //do the thing
        numberQuestion += 1;
    }
}
//show the number of question you're on

function scoreCounter() {
//for each correct answer, add 10 to the current score
//     if (correctQuestion) {
    score += 10;
    // }

    // update current score in span
    scoreBoxEl.innerHTML = score;
}

//detect when the last question has been answered

//display final score

buttonEl.addEventListener('click', scoreCounter);

renderQuestion(allQuestions[3]);