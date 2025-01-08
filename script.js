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

let systemCoefficients = {}; // Store coefficients for the current system

function generateSystem() {
    // Randomly generate coefficients for two linear equations: ax + by = c
    const a1 = Math.floor(Math.random() * 10) + 1; // Coefficients for first equation
    const b1 = Math.floor(Math.random() * 10) + 1;
    const c1 = Math.floor(Math.random() * 50) + 1;

    const a2 = Math.floor(Math.random() * 10) + 1; // Coefficients for second equation
    const b2 = Math.floor(Math.random() * 10) + 1;
    const c2 = Math.floor(Math.random() * 50) + 1;

    // Save the coefficients
    systemCoefficients = { a1, b1, c1, a2, b2, c2 };

    // Display the equations
    document.getElementById("equations").textContent =
        `${a1}x + ${b1}y = ${c1}\n` +
        `${a2}x + ${b2}y = ${c2}`;

    // Clear previous inputs and feedback
    document.getElementById("x-answer").value = "";
    document.getElementById("y-answer").value = "";
    document.getElementById("algebra-feedback").textContent = "";
}

function checkSystem() {
    const { a1, b1, c1, a2, b2, c2 } = systemCoefficients;

    // Get user inputs for x and y
    const userX = parseFloat(document.getElementById("x-answer").value);
    const userY = parseFloat(document.getElementById("y-answer").value);

    // Calculate if the user's answer satisfies both equations
    const isCorrect =
        Math.abs(a1 * userX + b1 * userY - c1) < 0.01 && // Allowing small rounding errors
        Math.abs(a2 * userX + b2 * userY - c2) < 0.01;

    // Provide feedback
    if (isCorrect) {
        document.getElementById("algebra-feedback").textContent = "Correct! Well done!";
        document.getElementById("algebra-feedback").style.color = "green";
    } else {
        document.getElementById("algebra-feedback").textContent = "Incorrect! Try again.";
        document.getElementById("algebra-feedback").style.color = "red";
    }
}
