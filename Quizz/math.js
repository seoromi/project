const questions = [
    {
        question: "7 + 7 ?",
        answers: [
            { text: "11", correct: false },
            { text: "14", correct: true },
            { text: "7", correct: false },
            { text: "20", correct: false }
        ]
    },
    {
        question: "5 - 3 ?",
        answers: [
            { text: "2", correct: true },
            { text: "8", correct: false },
            { text: "4", correct: false },
            { text: "1", correct: false }
        ]
    },
    {
        question: "6 + 2 ?",
        answers: [
            { text: "8", correct: true },
            { text: "12", correct: false },
            { text: "10", correct: false },
            { text: "3", correct: false }
        ]
    },
    {
        question: "9 - 3 ?",
        answers: [
            { text: "6", correct: true },
            { text: "4", correct: false },
            { text: "2", correct: false },
            { text: "10", correct: false }
        ]
    },
    {
        question: "10 + 5 ?",
        answers: [
            { text: "15", correct: true },
            { text: "14", correct: false },
            { text: "12", correct: false },
            { text: "9", correct: false }
        ]
    },
    {
        question: "4 - 2 ?",
        answers: [
            { text: "2", correct: true },
            { text: "3", correct: false },
            { text: "5", correct: false },
            { text: "1", correct: false }
        ]
    },
    {
        question: "10 - 3 ?",
        answers: [
            { text: "7", correct: true },
            { text: "10", correct: false },
            { text: "6", correct: false },
            { text: "5", correct: false }
        ]
    },
    {
        question: "2 + 4 ?",
        answers: [
            { text: "6", correct: true },
            { text: "2", correct: false },
            { text: "4", correct: false },
            { text: "3", correct: false }
        ]
    },
    {
        question: "9 + 3 ?",
        answers: [
            { text: "12", correct: true },
            { text: "11", correct: false },
            { text: "10", correct: false },
            { text: "14", correct: false }
        ]
    },
    {
        question: "7 - 5 ?",
        answers: [
            { text: "2", correct: true },
            { text: "3", correct: false },
            { text: "4", correct: false },
            { text: "1", correct: false }
        ]
    },

    {
        question: "15 + 8 ?",
        answers: [
            { text: "20", correct: false },
            { text: "21", correct: false },
            { text: "22", correct: true },
            { text: "23", correct: false }
        ]
    },
    {
        question: "14 - 6 ?",
        answers: [
            { text: "6", correct: false },
            { text: "7", correct: false },
            { text: "8", correct: true },
            { text: "9", correct: false }
        ]
    },
    {
        question: "4 + 6 ?",
        answers: [
            { text: "12", correct: false },
            { text: "11", correct: false },
            { text: "10", correct: true },
            { text: "13", correct: false }
        ]
    },
    {
        question: "12 - 6 ?",
        answers: [
            { text: "3", correct: false },
            { text: "4", correct: false },
            { text: "5", correct: false },
            { text: "6", correct: true }
        ]
    },
    {
        question: "9 + 5 ?",
        answers: [
            { text: "13", correct: true },
            { text: "14", correct: false },
            { text: "15", correct: false },
            { text: "16", correct: false }
        ]
    },



    {
        question: "10 + 10 ?",
        answers: [
            { text: "11", correct: false },
            { text: "20", correct: true },
            { text: "7", correct: false },
            { text: "20", correct: false }
        ]
    },
    {
        question: "7 - 3 ?",
        answers: [
            { text: "4", correct: true },
            { text: "8", correct: false },
            { text: "2", correct: false },
            { text: "1", correct: false }
        ]
    },
    {
        question: "6 + 2 ?",
        answers: [
            { text: "8", correct: true },
            { text: "12", correct: false },
            { text: "10", correct: false },
            { text: "3", correct: false }
        ]
    },
    {
        question: "9 - 3 ?",
        answers: [
            { text: "6", correct: true },
            { text: "4", correct: false },
            { text: "2", correct: false },
            { text: "3", correct: false }
        ]
    },
    {
        question: "12 + 5 ?",
        answers: [
            { text: "17", correct: true },
            { text: "14", correct: false },
            { text: "12", correct: false },
            { text: "9", correct: false }
        ]
    },
    {
        question: "4 - 2 ?",
        answers: [
            { text: "3", correct: true },
            { text: "2", correct: false },
            { text: "5", correct: false },
            { text: "1", correct: false }
        ]
    },
    {
        question: "8 + 3 ?",
        answers: [
            { text: "11", correct: true },
            { text: "18", correct: false },
            { text: "21", correct: false },
            { text: "12", correct: false }
        ]
    },
    {
        question: "12 + 4 ?",
        answers: [
            { text: "3", correct: false },
            { text: "16", correct: true },
            { text: "4", correct: false },
            { text: "6", correct: false }
        ]
    },
    {
        question: "9 + 4 ?",
        answers: [
            { text: "12", correct: false },
            { text: "13", correct: true },
            { text: "10", correct: false },
            { text: "14", correct: false }
        ]
    },
    {
        question: "7 + 5 ?",
        answers: [
            { text: "12", correct: true },
            { text: "3", correct: false },
            { text: "4", correct: false },
            { text: "1", correct: false }
        ]
    },

    {
        question: "15 + 8 ?",
        answers: [
            { text: "20", correct: false },
            { text: "23", correct: true },
            { text: "22", correct: false },
            { text: "21", correct: false }
        ]
    },
    {
        question: "14 + 6 ?",
        answers: [
            { text: "6", correct: false },
            { text: "20", correct: true },
            { text: "8", correct: false },
            { text: "9", correct: false }
        ]
    },
    {
        question: "4 - 3 ?",
        answers: [
            { text: "10", correct: false },
            { text: "11", correct: false },
            { text: "1", correct: true },
            { text: "13", correct: false }
        ]
    },
    {
        question: "14 6 ?",
        answers: [
            { text: "3", correct: false },
            { text: "8", correct: true },
            { text: "5", correct: false },
            { text: "6", correct: false }
        ]
    },
    {
        question: "9 + 5 ?",
        answers: [
            { text: "13", correct: true },
            { text: "14", correct: false },
            { text: "15", correct: false },
            { text: "16", correct: false }
        ]
    },



    {
        question: "4 + 7 ?",
        answers: [
            { text: "11", correct: true },
            { text: "10", correct: false },
            { text: "7", correct: false },
            { text: "20", correct: false }
        ]
    },
    {
        question: "5 + 4 ?",
        answers: [
            { text: "2", correct: false },
            { text: "9", correct: true },
            { text: "4", correct: false },
            { text: "1", correct: false }
        ]
    },
    {
        question: "6 + 3 ?",
        answers: [
            { text: "12", correct: false },
            { text: "8", correct: false },
            { text: "10", correct: false },
            { text: "9", correct: true }
        ]
    },
    {
        question: "9 - 4 ?",
        answers: [
            { text: "3", correct: false },
            { text: "4", correct: false },
            { text: "5", correct: true },
            { text: "6", correct: false }
        ]
    },
    {
        question: "11 + 5 ?",
        answers: [
            { text: "16", correct: true },
            { text: "14", correct: false },
            { text: "12", correct: false },
            { text: "9", correct: false }
        ]
    },
    {
        question: "4 - 4 ?",
        answers: [
            { text: "0", correct: true },
            { text: "3", correct: false },
            { text: "5", correct: false },
            { text: "1", correct: false }
        ]
    },
    {
        question: "8 + 6 ?",
        answers: [
            { text: "14", correct: true },
            { text: "18", correct: false },
            { text: "21", correct: false },
            { text: "12", correct: false }
        ]
    },
    {
        question: "12 -5 ?",
        answers: [
            { text: "7", correct: true },
            { text: "2", correct: false },
            { text: "4", correct: false },
            { text: "6", correct: false }
        ]
    },
    {
        question: "9 + 3 ?",
        answers: [
            { text: "12", correct: true },
            { text: "11", correct: false },
            { text: "10", correct: false },
            { text: "14", correct: false }
        ]
    },
    {
        question: "7 - 4 ?",
        answers: [
            { text: "2", correct: false },
            { text: "3", correct: true },
            { text: "4", correct: false },
            { text: "1", correct: false }
        ]
    },

    {
        question: "15 + 89?",
        answers: [
            { text: "20", correct: false },
            { text: "21", correct: false },
            { text: "22", correct: false },
            { text: "23", correct: true }
        ]
    },
    {
        question: "14 - 5 ?",
        answers: [
            { text: "6", correct: false },
            { text: "7", correct: false },
            { text: "8", correct: false },
            { text: "9", correct: true }
        ]
    },
    {
        question: "4 + 3 ?",
        answers: [
            { text: "10", correct: false },
            { text: "11", correct: false },
            { text: "7", correct: true },
            { text: "13", correct: false }
        ]
    },
    {
        question: "24 - 18 ?",
        answers: [
            { text: "3", correct: false },
            { text: "4", correct: false },
            { text: "5", correct: false },
            { text: "6", correct: true }
        ]
    },
    {
        question: "9 + 7 ?",
        answers: [
            { text: "13", correct: false },
            { text: "14", correct: false },
            { text: "15", correct: false },
            { text: "16", correct: true }
        ]
    },



    {
        question: "5 + 6 ?",
        answers: [
            { text: "11", correct: true },
            { text: "10", correct: false },
            { text: "7", correct: false },
            { text: "20", correct: false }
        ]
    },
    {
        question: "5 + 2 ?",
        answers: [
            { text: "2", correct: true },
            { text: "8", correct: false },
            { text: "4", correct: false },
            { text: "7", correct: true }
        ]
    },
    {
        question: "6 + 5 ?",
        answers: [
            { text: "11", correct: true },
            { text: "8", correct: false },
            { text: "10", correct: false },
            { text: "3", correct: false }
        ]
    },
    {
        question: "9 + 5 ?",
        answers: [
            { text: "14", correct: true },
            { text: "4", correct: false },
            { text: "2", correct: false },
            { text: "6", correct: false }
        ]
    },
    {
        question: "10 + 5 ?",
        answers: [
            { text: "15", correct: true },
            { text: "14", correct: false },
            { text: "12", correct: false },
            { text: "9", correct: false }
        ]
    },
    {
        question: "4 - 2 ?",
        answers: [
            { text: "2", correct: true },
            { text: "3", correct: false },
            { text: "5", correct: false },
            { text: "1", correct: false }
        ]
    },
    {
        question: "8 - 3 ?",
        answers: [
            { text: "4", correct: true },
            { text: "18", correct: false },
            { text: "21", correct: false },
            { text: "12", correct: false }
        ]
    },
    {
        question: "12 - 4 ?",
        answers: [
            { text: "8", correct: true },
            { text: "2", correct: false },
            { text: "4", correct: false },
            { text: "6", correct: false }
        ]
    },
    {
        question: "9 + 3 ?",
        answers: [
            { text: "12", correct: true },
            { text: "11", correct: false },
            { text: "10", correct: false },
            { text: "14", correct: false }
        ]
    },
    {
        question: "7 - 6 ?",
        answers: [
            { text: "2", correct: false },
            { text: "3", correct: false },
            { text: "4", correct: false },
            { text: "1", correct: true }
        ]
    },

    {
        question: "15 + 8 ?",
        answers: [
            { text: "20", correct: false },
            { text: "21", correct: false },
            { text: "22", correct: true },
            { text: "23", correct: false }
        ]
    },
    {
        question: "14 - 6 ?",
        answers: [
            { text: "6", correct: false },
            { text: "7", correct: false },
            { text: "8", correct: true },
            { text: "9", correct: false }
        ]
    },
    {
        question: "4 + 3 ?",
        answers: [
            { text: "10", correct: false },
            { text: "11", correct: false },
            { text: "7", correct: true },
            { text: "13", correct: false }
        ]
    },
    {
        question: "14 - 6 ?",
        answers: [
            { text: "3", correct: false },
            { text: "8", correct: true },
            { text: "5", correct: false },
            { text: "6", correct: false }
        ]
    },
    {
        question: "9 + 5 ?",
        answers: [
            { text: "13", correct: false },
            { text: "14", correct: true },
            { text: "15", correct: false },
            { text: "16", correct: false }
        ]
    },



    {
        question: "8 + 8 ?",
        answers: [
            { text: "11", correct: false },
            { text: "16", correct: true },
            { text: "7", correct: false },
            { text: "20", correct: false }
        ]
    },
    {
        question: "5 - 3 ?",
        answers: [
            { text: "2", correct: true },
            { text: "8", correct: false },
            { text: "4", correct: false },
            { text: "1", correct: false }
        ]
    },
    {
        question: "6 - 2 ?",
        answers: [
            { text: "4", correct: true },
            { text: "8", correct: false },
            { text: "10", correct: false },
            { text: "3", correct: false }
        ]
    },
    {
        question: "9 - 3 ?",
        answers: [
            { text: "6", correct: true },
            { text: "4", correct: false },
            { text: "2", correct: false },
            { text: "3", correct: false }
        ]
    },
    {
        question: "10 - 5 ?",
        answers: [
            { text: "5", correct: true },
            { text: "14", correct: false },
            { text: "12", correct: false },
            { text: "9", correct: false }
        ]
    },
    {
        question: "4 - 2 ?",
        answers: [
            { text: "2", correct: true },
            { text: "3", correct: false },
            { text: "5", correct: false },
            { text: "1", correct: false }
        ]
    },
    {
        question: "8 - 3 ?",
        answers: [
            { text: "5", correct: true },
            { text: "18", correct: false },
            { text: "21", correct: false },
            { text: "12", correct: false }
        ]
    },
    {
        question: "14 - 4 ?",
        answers: [
            { text: "8", correct: true },
            { text: "2", correct: false },
            { text: "4", correct: false },
            { text: "6", correct: false }
        ]
    },
    {
        question: "10 - 3 ?",
        answers: [
            { text: "7", correct: true },
            { text: "11", correct: false },
            { text: "10", correct: false },
            { text: "14", correct: false }
        ]
    },
    {
        question: "8 - 5 ?",
        answers: [
            { text: "3", correct: true },
            { text: "2", correct: false },
            { text: "4", correct: false },
            { text: "1", correct: false }
        ]
    },

    {
        question: "10 + 8 ?",
        answers: [
            { text: "20", correct: false },
            { text: "21", correct: false },
            { text: "18", correct: true },
            { text: "23", correct: false }
        ]
    },
    {
        question: "10 - 6 ?",
        answers: [
            { text: "6", correct: false },
            { text: "7", correct: false },
            { text: "4", correct: true },
            { text: "9", correct: false }
        ]
    },
    {
        question: "4 - 3 ?",
        answers: [
            { text: "3", correct: false },
            { text: "2", correct: false },
            { text: "1", correct: true },
            { text: "4", correct: false }
        ]
    },
    {
        question: "6 - 6 ?",
        answers: [
            { text: "3", correct: false },
            { text: "0", correct: true },
            { text: "5", correct: false },
            { text: "6", correct: false }
        ]
    },
    {
        question: "7 - 5 ?",
        answers: [
            { text: "2", correct: true },
            { text: "4", correct: false },
            { text: "7", correct: false },
            { text: "1s", correct: false }
        ]
    },


    {
        question: "3 - 2 ?",
        answers: [
            { text: "2", correct: false },
            { text: "1", correct: true },
            { text: "4", correct: false },
            { text: "5", correct: false }
        ]
    },
    {
        question: "5 - 3 ?",
        answers: [
            { text: "2", correct: true },
            { text: "8", correct: false },
            { text: "4", correct: false },
            { text: "1", correct: false }
        ]
    },
    {
        question: "6 - 2 ?",
        answers: [
            { text: "4", correct: true },
            { text: "8", correct: false },
            { text: "7", correct: false },
            { text: "3", correct: false }
        ]
    },
    {
        question: "9 - 6 ?",
        answers: [
            { text: "3", correct: true },
            { text: "4", correct: false },
            { text: "2", correct: false },
            { text: "6", correct: false }
        ]
    },
    {
        question: "5 + 1?",
        answers: [
            { text: "6", correct: true },
            { text: "4", correct: false },
            { text: "5", correct: false },
            { text: "1", correct: false }
        ]
    },
    {
        question: "4 - 2 ?",
        answers: [
            { text: "2", correct: true },
            { text: "3", correct: false },
            { text: "5", correct: false },
            { text: "1", correct: false }
        ]
    },
    {
        question: "8 - 3 ?",
        answers: [
            { text: "5", correct: true },
            { text: "10", correct: false },
            { text: "2", correct: false },
            { text: "7", correct: false }
        ]
    },
    {
        question: "12 - 4 ?",
        answers: [
            { text: "8", correct: true },
            { text: "2", correct: false },
            { text: "4", correct: false },
            { text: "6", correct: false }
        ]
    },
    {
        question: "9 + 3 ?",
        answers: [
            { text: "12", correct: true },
            { text: "11", correct: false },
            { text: "10", correct: false },
            { text: "14", correct: false }
        ]
    },
    {

        question: "7 - 5 ?",
        answers: [
            { text: "2", correct: true },
            { text: "3", correct: false },
            { text: "4", correct: false },
            { text: "1", correct: false }
        ]
    },

    {
        question: "2 + 2 ?",
        answers: [
            { text: "3", correct: false },
            { text: "5", correct: false },
            { text: "4", correct: true },
            { text: "2", correct: false }
        ]
    },
    {
        question: "14 - 6 ?",
        answers: [
            { text: "6", correct: false },
            { text: "7", correct: false },
            { text: "8", correct: true },
            { text: "9", correct: false }
        ]
    },
    {
        question: "4 - 3 ?",
        answers: [
            { text: "2", correct: false },
            { text: "4", correct: false },
            { text: "1", correct: true },
            { text: "0", correct: false }
        ]
    },
    {
        question: "14 - 4 ?",
        answers: [
            { text: "3", correct: false },
            { text: "10", correct: true },
            { text: "5", correct: false },
            { text: "6", correct: false }
        ]
    },
    {
        question: "2 + 5 ?",
        answers: [
            { text: "7", correct: true },
            { text: "14", correct: false },
            { text: "15", correct: false },
            { text: "16", correct: false }
        ]
    },



    {
        question: "1 + 1 ?",
        answers: [
            { text: "3", correct: false },
            { text: "2", correct: true },
            { text: "5", correct: false },
            { text: "0", correct: false }
        ]
    },
    {
        question: "5 - 3 ?",
        answers: [
            { text: "2", correct: true },
            { text: "8", correct: false },
            { text: "4", correct: false },
            { text: "1", correct: false }
        ]
    },
    {
        question: "6 - 2 ?",
        answers: [
            { text: "4", correct: true },
            { text: "8", correct: false },
            { text: "10", correct: false },
            { text: "3", correct: false }
        ]
    },
    {
        question: "5 - 3 ?",
        answers: [
            { text: "2", correct: true },
            { text: "4", correct: false },
            { text: "5", correct: false },
            { text: "6", correct: false }
        ]
    },
    {
        question: "10 + 5 ?",
        answers: [
            { text: "15", correct: true },
            { text: "14", correct: false },
            { text: "12", correct: false },
            { text: "9", correct: false }
        ]
    },
    {
        question: "4 - 2 ?",
        answers: [
            { text: "2", correct: true },
            { text: "3", correct: false },
            { text: "5", correct: false },
            { text: "1", correct: false }
        ]
    },
    {
        question: "8 - 3 ?",
        answers: [
            { text: "5", correct: true },
            { text: "10", correct: false },
            { text: "7", correct: false },
            { text: "6", correct: false }
        ]
    },
    {
        question: "12 - 4 ?",
        answers: [
            { text: "8", correct: true },
            { text: "2", correct: false },
            { text: "4", correct: false },
            { text: "6", correct: false }
        ]
    },
    {
        question: "7 - 4 ?",
        answers: [
            { text: "3", correct: true },
            { text: "5", correct: false },
            { text: "4", correct: false },
            { text: "6", correct: false }
        ]
    },
    {
        question: "10 - 5 ?",
        answers: [
            { text: "5", correct: true },
            { text: "3", correct: false },
            { text: "4", correct: false },
            { text: "1", correct: false }
        ]
    }

];






const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Növbeti";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.
        question;


    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);

    });
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === 'true') {
            button.classList.add('correct');
        }
        button.disabled = true;
    });
    nextButton.style.display = 'block';
}


function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length} !`;
    nextButton.innerHTML = 'Yeniden oyna';
    nextButton.style.display = "block"
}


function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

nextButton.addEventListener('click', () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
});

startQuiz();


//!--------------------------------------------------Alph----------------------------------------------------------------------
 