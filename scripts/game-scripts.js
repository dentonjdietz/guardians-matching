// Whack a Thanos
// Denton Dietz 2018

const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const moles = document.querySelectorAll('.mole');
let lastHole;
let timeUp = false;
let score = 0;
var btnStart = document.getElementById("#startButton");

function randomTime(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function randomHole(holes) {
  const idx = Math.floor(Math.random() * holes.length);
  const hole = holes[idx];
  if(hole === lastHole) {
    console.log('nooooo')
    randomHole(holes);
  }
  
  lastHole = hole;
  return hole;
}

function peep() {
  const time = randomTime(800, 1000);
  const hole = randomHole(holes);
  hole.classList.add('up');

  setTimeout(() => {
    hole.classList.remove('up');
    if(!timeUp) peep();
  }, time);
}

function startGame() {
  scoreBoard.textContent = 0;
  timeUp = false;
  score = 0;
  peep();
  setTimeout(() => timeUp = true, 20000)
  btnStart.textContent = 'Stop';
}

function stopGame() {
  setTimeout(() => timeUp = true, 0)
}

function endOfGame() {
  if(timeUp = true) window.location.href='index.html';
}

function bonk(e) {
  console.log(e);
  if(!e.isTrusted) return; // Not for cheaters!
  score++;
  this.classList.remove('up');
  scoreBoard.textContent = score;
}

moles.forEach(mole => mole.addEventListener('click', bonk));