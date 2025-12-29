var imposter = false
var imposters = ['ah', 'fd', 'jy', 'sq', 'ls']

const clues = [
    {
        prompt: "Enter your initials (first + last):",
        answer: "",
    },
    // {
    //     prompt: '<p class="hidden-clue"> TESST </p> <p class="hidden-clue"> TESST </p>',
    //     answer: "s",
    // },
    {
        prompt: "Welcome to the IIIII. This is a scavenger hunt. All clues can be found on the main floor of this facility. <br\><br\>"
         + "You will work as a team with your fellow crewmates to solve each clue, and a prize awaits at the end! <br\><br\>" 
         + "All crewmates have been assigned a common task, which must be carried out before the hunt ends. However, there is at least 1 imposter among you, who does not know the task. The goal of the imposter is to blend in. <br\><br\> "
        + "The task is not your typical Amogus task; it involves the way the crewmates may speak/behave...<br\><br\>"
         + "At the end, if the crewmates successfully vote out the imposter(s), you win a bonus. Otherwise, the imposters win a bonus. <br\><br\>"
         + "To begin, enter the airlock code below.",
        answer: "start",
    },
    {
        prompt: "",
        answer: "pupu",
        image: "images/yawn.png"
    },
    {
        prompt: "John Thompson 🥈",
        answer: "banana",
        // image: "images/stair.png"
    },
    {
        prompt: "C3 👟H8 👟 O3 ",
        answer: "moo",
        // image: "images/sketch1.jpg"
    },
    {
        prompt: "",
        answer: "nuts",
        image: "images/diff2.png"
    },
    {
        prompt: "",
        answer: "fish",
        image: "images/sketch2.jpg"
    },
    {
        prompt: '<p class="hidden-clue"> Some may think I work miracles, but I am merely an insect surrounded by essay. </p>  <p class="hidden-clue"> Who am I? </p>',
        answer: "santa",
    },
    {
        prompt: "We are once again at the final puzzle! However, I think Lulu got into the prize bag and scratched the prizes up. Once again there is only enough for 1 winner. The winner shall be the first person to solve this puzzle and shout out the pass phrase:",
        image: "images/final.jpg"
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
        if(userAnswer.length != 2) return;
        // initial
        if(imposters.includes(userAnswer)){
            imposter = true
            // TODO: set imposter text
        }


        if(imposter){
            imposterText.innerHTML = "You are an IMPOSTER. Try to blend in with the others... <br\> The imposters are Alex H, Felix, Jennifer, Selina, and Lavan."
        }
        else{
            imposterText.innerHTML = "You are a CREWMATE. <br\><br\> TASK: There is no task >:). Try to expose imposters by getting them to copy you doing weird things!"
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
        feedbackEl.textContent = "Incorrect. Seriously???.";
        feedbackEl.style.color = "#e74c3c";
    }
}

showClue();
