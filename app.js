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
    next.innerHTML = "Submit";
  
    showQuestion();
}

function showQuestion() {
    let currentQuestion = questions[curentindex];
    questionElement.innerHTML = currentQuestion.number + "." + currentQuestion.question;
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        button.addEventListener("click", function() {
            // Handle answer selection here (check if it's correct, update score, etc.)
        });
        answerElement.appendChild(button);
    });
}




function resetState() {
    const buttonContainer = document.getElementById("answerbtn");
    while (buttonContainer.firstChild) {
        buttonContainer.removeChild(buttonContainer.firstChild);
    }


}


function getNextQuestion() {
    let currentQuestion = questions[curentindex];
    resetState(); // Clear previous answer buttons

    questionElement.innerHTML = currentQuestion.number + "." + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const buttonContainer = document.getElementById("answerbtn");
        const newButton = document.createElement("button");
        newButton.innerText = answer.text;
        newButton.classList.add("btn");

        newButton.addEventListener("click", function() {
            // Check if the clicked answer is correct
            if (answer.correct) {
                // Update score if the answer is correct
                Score++;
            }
            // Move to the next question
            curentindex++;
            // Check if there are more questions
            if (curentindex < questions.length) {
                // Display the next question
                getNextQuestion();
            } else {
                // If no more questions, show the user's score
                alert("Quiz completed! Your score: " + Score);
            }
        });

        buttonContainer.appendChild(newButton);
    });
}

window.onload = startQuiz;
// startQuiz();





