
const questions = [
    { question: "What is 2 + 2?", answer: "A", options: ["A: 4", "B: 5", "C: 3", "D: 6"] },
    { question: "What is the capital of France?", answer: "B", options: ["A: London", "B: Paris", "C: Rome", "D: Madrid"] }
];
let currentQuestionIndex = 0;

function displayQuestion() {
    const questionElement = document.getElementById('question');
    questionElement.textContent = questions[currentQuestionIndex].question;
}

function checkAnswer(answer) {
    const resultElement = document.getElementById('result');
    if (answer === questions[currentQuestionIndex].answer) {
        resultElement.textContent = "Correct!";
    } else {
        resultElement.textContent = "Wrong!";
    }
}

// Simple Game Functionality
function startGame() {
    const canvas = document.getElementById('gameCanvas');
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = 'blue';
    ctx.fillRect(100, 100, 50, 50);
    // Add game logic here
}

displayQuestion();