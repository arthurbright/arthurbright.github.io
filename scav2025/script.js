const clues = [
    {
        prompt: "🎄 I sparkle on top of the tree and shine so bright. What am I?",
        answer: "star"
    },
    {
        prompt: "🧦 I hang by the fireplace and get filled with treats. What am I?",
        answer: "stocking"
    },
    {
        prompt: "🎁 I’m wrapped up tight with ribbon and bow. What am I?",
        answer: "present"
    },
    {
        prompt: "🎅 Final clue! Who says 'Ho Ho Ho'?",
        answer: "santa"
    }
];

let currentClue = 0;

const promptEl = document.getElementById("prompt");
const inputEl = document.getElementById("answerInput");
const feedbackEl = document.getElementById("feedback");
const submitBtn = document.getElementById("submitBtn");

function showClue() {
    promptEl.textContent = clues[currentClue].prompt;
    inputEl.value = "";
    feedbackEl.textContent = "";
}

submitBtn.addEventListener("click", checkAnswer);
inputEl.addEventListener("keypress", (e) => {
    if (e.key === "Enter") checkAnswer();
});

function checkAnswer() {
    const userAnswer = inputEl.value.trim().toLowerCase();
    const correctAnswer = clues[currentClue].answer;

    if (userAnswer === correctAnswer) {
        feedbackEl.textContent = "🎉 Correct! Next...";
        feedbackEl.style.color = "#2ecc71";

        currentClue++;

        if (currentClue < clues.length) {
            setTimeout(showClue, 1000);
        } else {
            promptEl.textContent = "🎄 Congratulations! You completed the scavenger hunt! 🎁";
            inputEl.style.display = "none";
            submitBtn.style.display = "none";
        }
    } else {
        feedbackEl.textContent = "Incorrect. You suck.";
        feedbackEl.style.color = "#e74c3c";
    }
}

showClue();
