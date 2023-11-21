const questions = [
    {
        question: "What is the capital of France?",
        options: ["Paris", "Berlin", "London"],
        correctAnswer: "Paris"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Venus"],
        correctAnswer: "Mars"
    },
    {
        question: "Orlando Stadium can be found in which big city?",
        options: ["Johannesburg", "Cape Town", "Durban"],
        correctAnswer: "Johannesburg"
    },
    {
        question: "How much water does Earth consist of?",
        options: ["71%", "75%", "60%"],
        correctAnswer: "71%"
    },
    {
        question: "Which element is the lightest?",
        options: ["Hydrogen", "Oxygen", "Carbon"],
        correctAnswer: "Hydrogen"
    }
];

const quiz = {
    currentQuestionIndex: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
    timer: null,
    skippedQuestions: 0,
    totalQuestions: questions.length,
    quizStarted: false,
};
document.querySelector('.submit').addEventListener('click', submitAnswer);
document.querySelector('.skip').addEventListener('click', skipQuestion);

const quizContainer = document.getElementById("quiz");
function resetTimer() {
    clearInterval(quiz.timer);
    document.getElementById('time-elapsed').textContent = '0:30';
}