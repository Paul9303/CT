let correctAnswer = 0;

function generateProblem() {
    const num1 = Math.floor(Math.random() * 100);
    const num2 = Math.floor(Math.random() * 100);
    correctAnswer = num1 + num2;

    document.getElementById("problem").textContent = `What is ${num1} + ${num2}?`;
    document.getElementById("answer").value = "";
    document.getElementById("feedback").textContent = "";
}

function checkAnswer() {
    const userAnswer = parseInt(document.getElementById("answer").value, 10);
    if (userAnswer === correctAnswer) {
        document.getElementById("feedback").textContent = "Correct! Great job!";
        document.getElementById("feedback").style.color = "green";
    } else {
        document.getElementById("feedback").textContent = `Wrong! The correct answer is ${correctAnswer}.`;
        document.getElementById("feedback").style.color = "red";
    }
}
