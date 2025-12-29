var imposter = false
var imposters = ['kg', 'kl']
var imposters_full = "Kevin, Kirsten";

const clues = [
    {
        prompt: "Enter your initials (first + last):",
        answer: "",
    },
    {
        prompt: "Welcome to the III. This is a scavenger hunt, where you must look around for clues. All clues can be found on the main floor of this facility. <br\><br\>"
         + "You will work as a team with your fellow crewmates to solve the puzzles, and a prize awaits at the end! <br\><br\>" 
         + "All crewmates have been assigned the same task, which must be carried out before the hunt ends. However, there is at least 1 imposter among you, who does not know the task. The goal of the imposter is to blend in. At the end, if you successfully vote out the exact imposter(s), you win a bonus. Otherwise, the imposters win a bonus. <br\><br\>"
         + "The task is not your typical Amogus task; it involves the way the crewmates may speak/behave...<br\><br\>"
         + "To begin, enter the airlock code below.",
        answer: "bruh",
    },
    {
        prompt: "Isn't it a bit chilly in here?",
        answer: "star",
        image: "images/tree-topper.jpg"
    },
    {
        prompt: "🧦 I hang by the fireplace and get filled with treats. What am I?",
        answer: "stocking"
    },
    {
        prompt: "🎁 I’m wrapped up tight with ribbon and bow. What am I?",
        answer: "present",
        image: "images/present.jpg"
    },
    {
        prompt: "🎅 Final clue! Who says 'Ho Ho Ho'?",
        answer: "santa",
        image: "images/santa.jpg"
    }
];


let currentClue = 0;

const promptEl = document.getElementById("prompt");
const inputEl = document.getElementById("answerInput");
const feedbackEl = document.getElementById("feedback");
const submitBtn = document.getElementById("submitBtn");
const imposterText = document.getElementById("imp");

const promptTextEl = document.getElementById("promptText");
const promptImageEl = document.getElementById("promptImage");

function showClue() {
    const clue = clues[currentClue];

    promptTextEl.innerHTML = clue.prompt;
    inputEl.value = "";
    feedbackEl.textContent = "";

    if (clue.image) {
        promptImageEl.src = clue.image;
        promptImageEl.style.display = "block";
    } else {
        promptImageEl.style.display = "none";
        promptImageEl.src = "";
    }

    if(currentClue == clues.length - 1){
        inputEl.style.display = "none";
        submitBtn.style.display = "none";
        feedbackEl.style.display = "none";
    }
}

submitBtn.addEventListener("click", checkAnswer);
inputEl.addEventListener("keypress", (e) => {
    if (e.key === "Enter") checkAnswer();
});

function checkAnswer() {
    const userAnswer = inputEl.value.trim().toLowerCase();
    const correctAnswer = clues[currentClue].answer;
    if(userAnswer.length == 0){
        return;
    }

    if(currentClue == 0){
        // initial
        if(imposters.includes(userAnswer)){
            imposter = true
            // TODO: set imposter text
        }


        if(imposter){
            imposterText.innerHTML = "You are an IMPOSTER. Try to blend in with the others... <br\> The imposters are Kevin and Kirsten."
        }
        else{
            imposterText.innerHTML = "You are a CREWMATE. <br\><br\> TASK: you must say the names of 3 animals to the entire group before the scavenger hunt ends. You may NOT repeat an animal that you or someone else has already said. <br\><br\> Tip: don't be too obvious or the imposter(s) may catch on. Eg 'Holy cow this puzzle is hard!'. Good luck!"
        }
        imposterText.innerHTML = "<br\><br\><br\>" + imposterText.innerHTML;

        console.log(imposter)
        currentClue++;

        if (currentClue < clues.length) {
            setTimeout(showClue, 0);
        }
    }
    else if (userAnswer === correctAnswer) {
        feedbackEl.textContent = "🎉 Correct! Next...";
        feedbackEl.style.color = "#2ecc71";

        currentClue++;

        if (currentClue < clues.length) {
            setTimeout(showClue, 1000);
        } 
        // else {
        //     promptEl.textContent = "🎄 Congratulations! You completed the scavenger hunt! 🎁";
        //     inputEl.style.display = "none";
        //     submitBtn.style.display = "none";
        // }
    } else {
        feedbackEl.textContent = "Incorrect. You suck.";
        feedbackEl.style.color = "#e74c3c";
    }
}

showClue();
