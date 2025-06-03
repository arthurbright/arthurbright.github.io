function submitAnswer() {
      const userAnswer = document.getElementById('answerInput').value.trim().toLowerCase();
      const correctAnswer = "apple"; // You can change this

      const feedback = document.getElementById('feedback');
      if (userAnswer === correctAnswer) {
        feedback.textContent = "Correct!";
        feedback.style.color = "green";
      } else {
        feedback.textContent = "Try again.";
        feedback.style.color = "red";
      }
    }