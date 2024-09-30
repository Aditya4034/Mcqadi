// Function to check the answer for a question
function checkAnswer(questionName, correctAnswer, buttonElement) {
    const selectedAnswer = document.querySelector(`input[name="${questionName}"]:checked`);

    if (selectedAnswer) {
        const feedback = buttonElement.nextElementSibling; // Select the next element (feedback <p>)
        if (selectedAnswer.value === correctAnswer) {
            feedback.textContent = "Correct!";
            feedback.style.color = "green";
        } else {
            feedback.textContent = "Incorrect. The correct answer is: " + correctAnswer;
            feedback.style.color = "red";
        }
    } else {
        alert("Please select an answer before checking.");
    }
}
