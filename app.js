const questions = [
    {
        number: 1,
        question: "where off the school is located?",
        answers: [
            { text: "karachi", correct: true },
            { text: "Lahore", correct: false },
            { text: "Islamabad", correct: false },
            { text: "Peshawar", correct: false },

        ]
    },
    {
        number: 2,
        question: "Is off the school is a welfare turst?",
        answers: [
            { text: "Yes", correct: true },
            { text: "NO", correct: false },

        ]
    },
    {
        number: 3,
        question: "Is off the school is a educational institute?",
        answers: [
            { text: "yes", correct: true },
            { text: "No", correct: false },

        ]
    },
    {
        number: 4,
        question: "Did off the school have youtube channel?",
        answers: [
            { text: "Yes", correct: true },
            { text: "No", correct: false },

        ]
    },

];

const questionElement = document.getElementById("question");
const answerElement = document.getElementById("answerbtn");
const nextElement = document.getElementById("next");

let Score = 0;
let curentindex = 0;


function startQuiz() {
    Score = 0;
    next.innerHTML = "next";
    // console.log('next',next)
    showQuestion();
}

function showQuestion() {
      

    
    for (let q of questions) {

        let currentQuestion = q;
        questionElement.innerHTML = currentQuestion.number + "." + currentQuestion.question;
        console.log(' currentQuestion.answers', currentQuestion.answers)
        currentQuestion.answers.forEach(answer => {
            console.log('answer', answer)
            const button = document.createElement("button");
            button.innerHTML = answer.text;
            button.classList.add("btn")

        });
    }
}



function resetState() {
    const buttonContainer = document.getElementById("answerbtn");
    while (buttonContainer.firstChild) {
        buttonContainer.removeChild(buttonContainer.firstChild);
    }


}
// startQuiz();

function getNextQuestion() {
    let currentQuestion = curentindex;

    questionElement.innerHTML = questions[currentQuestion].number + "." + questions[currentQuestion].question;

    questions[currentQuestion].answers.forEach(answer => {
        // Select the div element where you want to append the button
        const buttonContainer = document.getElementById("answerbtn");

        // Create a new button element
        const newButton = document.createElement("button");

        // Set the button's text and other attributes if needed
        newButton.innerText = answer.text;
        newButton.id = "next";
        // Add an event listener to the button
        newButton.addEventListener("click", function() {
            alert("Button clicked!");
        });

        // Append the button to the button container
        buttonContainer.appendChild(newButton);

    });
    curentindex++
}






