const title = document.getElementById('title');
const question = document.getElementById('question');
const image = document.getElementById('quizImage');
const liveCounter = document.getElementById('lives');

var q = -1;

var qs = [
  ["_ _ _ _ _ &nbsp;&nbsp; _ _ _ _ _ _", "civic.jpg", "civiccentre", 8, -105, 20],
      ["_ _ _ _", "deca.png", "deca", 20, 0, 100],
["In what building was this image taken?", "bagman_tnt.jpg", "t&t", 25, -7, 15],
  ["_ _ _ _ _ _ _ &nbsp;&nbsp;&nbsp; _ _ _ _ _ _!", "mc.jpg", "chickenjockey", 17, -60, 40],
    ["Building?", "cmh.png", "cmh", 5, 0, -200],
      ["Song?", "baboons.jpg", "baboons", 10, 40, -50],
        ["City?", "tobermory.jpg", "tobermory", 14, -140, 20],
        ["?", "decimate.png", "apprehend", 3, 0, 0],
      ["Room number?", "505.jpg", "505", 5, 25, -20],
        ["_ _ _ _ _", "cotty.jpg", "cotty", 17, -85, 0],
          ["PFP where?", "linkedin.jpg", "linkedin", 4, 0, 10],
            ["Who was in the room with you? alphabetical first names eg. 'Alice Bob'", "who.jpg", "lavan sat", 10, 25, 25],
  ["City?", "kitchener.jpg", "kitchener", 6, 0, 70],
]

var scale = -1;
var x = -1;
var y = -1;
var lives = 100;


function cleanString(str) {
  return str.replace(/\s+/g, '').toLowerCase();
}

function zoom_out() {
  lives -= 1;
  liveCounter.innerHTML = "Lives Remaining: " + lives.toString();

  factor = 0.93;
  scale = Math.max(1, scale * factor);
  x = x * factor;
  y = y * factor;

  nx = 0 - x;
  xy = 0 - y;
  console.log(x);
  image.style.transform = `scale(${scale})`;
  image.style.objectPosition = `${nx}px ${ny}px `;
}


function next_q() {
  q += 1;
  if(q == 1){
    title.remove();
  }
  qq = qs[q];
  question.innerHTML = qq[0];
  image.src = "images/q/" + qq[1];

  scale = qq[3];
  x = qq[4];
  y = qq[5];

  nx = 0 - x;
  xy = 0 - y;
  image.style.transform = `scale(${scale})`;
  image.style.objectPosition = `${x}px ${y}px `;
}
next_q();




function submitAnswer() {
      const userAnswer = cleanString(document.getElementById('answerInput').value.trim());
      const correctAnswer = qs[q][2]; // You can change this

      const feedback = document.getElementById('feedback');
      if (userAnswer.includes(correctAnswer)) {
        feedback.textContent = "Correct!";
        feedback.style.color = "green";
        next_q();
      } else {
        feedback.textContent = "Try again.";
        feedback.style.color = "red";
        zoom_out();
      }
    }



// ideas:
/*
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