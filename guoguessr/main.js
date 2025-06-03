const title = document.getElementById('title');
const question = document.getElementById('question');
const image = document.getElementById('quizImage');
const liveCounter = document.getElementById('lives');

var q = -1;

var qs = [
      ["_ _ _ _", "deca.png", "icdc", 20, 0, 100],
["In what building was this image taken?", "bagman_tnt.jpg", "t&t", 25, -7, 15],
  ["_ _ _ _ _ _ _ &nbsp;&nbsp;&nbsp; _ _ _ _ _ _!", "mc.jpg", "chickenjockey", 17, -60, 40],
    ["Building?", "cmh.png", "cmh", 5, 0, -200],
      ["Song?", "baboons.jpg", "baboons", 10, 40, -50],
        ["_ _ _ _ _ _ _ 's", "bluffer.jpg", "bluffer", 8, -60, -20],
        ["_ _ _", "ion.jpg", "ion", 8, -100, -20],
            ["_ _ _ _", "deca2.png", "deca", 6, 0, 40],
          ["House?", "lavan.JPG", "lavan", 20, -130, 60],
        ["City?", "tobermory.jpg", "tobermory", 14, -140, 20],
          ["_ _ _ _ _ &nbsp;&nbsp; _ _ _ _ _ _", "civic.jpg", "civiccentre", 8, -105, 20],
  ["⛰️?", "ski.jpg", "tremblant", 10, -130, 90],
        ["?", "decimate.png", "apprehend", 3, 0, 0],
      ["Room number?", "505.jpg", "505", 5, 25, -20],
      ["Store?", "uniqlo.jpg", "uniqlo", 10, 0, -30],
        ["_ _ _ _ _", "cotty.jpg", "cotty", 17, -85, 0],
          ["Course?", "music270.png", "music270", 8, -25, 60],
          ["PFP where?", "linkedin.jpg", "linkedin", 4, 0, 10],
            ["Who was in the room with you? alphabetical first names eg. 'Alice Bob'", "who.jpg", "lavansat", 10, 25, 25],
  ["City?", "kitchener.jpg", "kitchener", 6, 0, 70],
  ["Excellent work. But I don't think we're done here. Are you ready for a challenge?", "hacker.png", "yes" , 1, -70, 0],
  ["Take all of the answers you have submitted so far. Remove non-alphabetic characters, and convert to lower case. Find a shortest string that contains all of these strings as substrings, along with the additional strings ['kevin', 'guo', 'eye', 'hamlet', 'ferb', 'balloon', 'etch', 'made', 'lock', 'minecraft', 'ayo', 'obama', 'abc', 'hola', 'slink', 'onset', 'sap', 'gum', 'yunshang', 'oink', 'glow', 'minor', 'antidisestablishmentarianism'].", "hacker.png", "AWOOGA" , 1, -70, 0]
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

  factor = 0.86;
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
  if(q == qs.length){
    // TODO redirect
    window.location.replace("finish.html");
  }

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

      if(q == qs.length - 1){
        if(check(userAnswer)){
          next_q();
        }
        else{
          feedback.textContent = "Try again.";
          feedback.style.color = "red";
        }
        return;
      }
      
      if (userAnswer == correctAnswer) {
        feedback.textContent = "Correct!";
        feedback.style.color = "green";
        next_q();
      } else {
        feedback.textContent = "Try again.";
        feedback.style.color = "red";
        zoom_out();
      }
    }


// ans
arr = ['icdc', 'tt', 'chickenjockey', 'cmh', 'baboons', 'bluffer', 'ion', 'deca', 'lavan', 'tobermory', 'civiccentre', 'tremblant', 'apprehend', 'uniqlo', 'cotty', 'music', 'linkedin', 'lavansat', 'kitchener', 'yes', 'kevin', 'guo', 'eye', 'hamlet', 'ferb', 'balloon', 'etch', 'made', 'lock', 'minecraft', 'ayo', 'obama', 'abc', 'hola', 'slink', 'onset', 'sap', 'gum', 'yunshang', 'oink', 'glow', 'minor', 'antidisestablishmentarianism'];

function check(s){
    if(s.length != 202){
      return false;
    }
    for(i in arr){
      ss = arr[i];
      if(!s.includes(ss)){
        // console.log(i);
        return false;
      }
    }
    return true;
  }

// guobamadecabciviccentremblantidisestablishmentarianismusicdcmholavansattobermoryunshanglowsapprehendhamletballoonuniqlockitchenerioncottyminorguminecraftblufferbaboonsetchickenjockeyeslinkedinayoinkevin