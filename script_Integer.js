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
    // Randomly generate coefficients for two linear equations
    const x = Math.floor(Math.random() * 10) + 1; // Random integer for x
    const y = Math.floor(Math.random() * 10) + 1; // Random integer for y

    // Generate coefficients for the equations such that solutions are integers
    const a1 = Math.floor(Math.random() * 10) + 1;
    const b1 = Math.floor(Math.random() * 10) + 1;
    const c1 = a1 * x + b1 * y;

    const a2 = Math.floor(Math.random() * 10) + 1;
    const b2 = Math.floor(Math.random() * 10) + 1;
    const c2 = a2 * x + b2 * y;

    // Save the coefficients and the correct solution
    systemCoefficients = { a1, b1, c1, a2, b2, c2, x, y };

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
    const { x, y } = systemCoefficients;

    // Get user inputs for x and y
    const userX = parseInt(document.getElementById("x-answer").value, 10);
    const userY = parseInt(document.getElementById("y-answer").value, 10);

    // Check if the user's inputs match the correct values
    if (userX === x && userY === y) {
        document.getElementById("algebra-feedback").textContent = "Correct! Well done!";
        document.getElementById("algebra-feedback").style.color = "green";
    } else {
        document.getElementById("algebra-feedback").textContent = `Incorrect! The correct solution is x = ${x}, y = ${y}.`;
        document.getElementById("algebra-feedback").style.color = "red";
    }
}

