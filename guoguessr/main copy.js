const title = document.getElementById('title');
const question = document.getElementById('question');
const image = document.getElementById('quizImage');

var q = -1;

var qs = [
  ["In what building was this image taken?", "bagman_tnt.jpg", 2, 50, 80],
  ["How lon2", "image.png", 2]
]

var scale = -1;
var top = -1;
var left = -1;
var wrongs = 0;

function zoom_out() {
  scale = Math.max(1, scale - 0.05);
  top = Math.max(0, top - 2);
  left = Math.max(0, left - 2);
  w = image.style.width;
  h = image.style.height;
  // console.log(w);

  image.style.transform = `scale(${scale})`;
  image.style.top = top;
  image.style.left = left;
}


function next_q() {
  q += 1;
  if(q == 1){
    title.remove();
  }
  question.innerHTML = qs[q][0];
  image.src = "images/q/" + qs[q][1];

  scale = qs[q][2];
  top = qs[q][3];
  left = qs[q][4];
  image.style.transform = `scale(${scale})`;
  // image.style.top = top;
  // image.style.left = left;
}
next_q();




function submitAnswer() {
      const userAnswer = document.getElementById('answerInput').value.trim().toLowerCase();
      const correctAnswer = "apple"; // You can change this

      const feedback = document.getElementById('feedback');
      if (userAnswer === correctAnswer) {
        feedback.textContent = "Correct!";
        feedback.style.color = "green";
        next_q();
      } else {
        feedback.textContent = "Try again.";
        feedback.style.color = "red";
        wrongs += 1;
        zoom_out();
      }
    }



// ideas:
/*
Darius summoner spell icon
Deca balloon picture
Guess the song (from a picture of sheet music)
Guess the song (from a melody eg 3 2 1 2 3 3 3)
Album cover (niki?)
Cotty
Ski trip
High school pics???
Band!
look thru google photos albums
-- pinned images in discord

-- for photos of kevin in them, start zoomed in to his face
-- then, slowly zoom out per wrong answer

-- answer should not be ambiguous, eg "when was this" could have multiple answers




*/