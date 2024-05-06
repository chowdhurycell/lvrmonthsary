// JavaScript for passcode input and navigation
document.addEventListener("DOMContentLoaded", function() {
    const passcodeInput = document.getElementById("passcode-input");
    const passcodeSubmit = document.getElementById("passcode-submit");

    passcodeSubmit.addEventListener("click", function() {
        const enteredPasscode = passcodeInput.value;
        const correctPasscode = "yourpasscode"; // Change this to your desired passcode

        if (enteredPasscode === correctPasscode) {
            // Navigate to the next page (picture puzzle)
            window.location.href = "picture_puzzle.html";
        } else {
            alert("Incorrect passcode. Please try again.");
        }
    });
});

// JavaScript for This or That questions
let correctAnswers = [1, 2, 1]; // Array to store correct answers (1 for option A, 2 for option B)

function checkAnswer(questionNumber) {
    const selectedOption = document.querySelector(`#option${questionNumber} button`);
    const questionContainer = selectedOption.closest('.question');
    const questionIndex = Array.from(questionContainer.parentNode.children).indexOf(questionContainer);
    const correctAnswer = correctAnswers[questionIndex];

    if (questionNumber === correctAnswer) {
        // Correct answer
        // Add logic to display images based on correct answer
    } else {
        // Wrong answer
        playWrongGIF();
    }
}

function playWrongGIF() {
    const wrongGIF = document.getElementById('wrong-gif');
    wrongGIF.style.display = 'block';

    // Play GIF
    // Replace 'path/to/wrong.gif' with the path to your GIF
    wrongGIF.src = 'path/to/wrong.gif';

    // Hide after a few seconds
    setTimeout(() => {
        wrongGIF.style.display = 'none';
    }, 5000); // Adjust timing as needed
}
