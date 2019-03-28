// When debug is set to true. Console logs will be shown
const debug = false;

let wins = 0;
let losses = 0;
let guesses = 10;
let prevGuesses = "";
let $wins = document.getElementById("wins");
let $losses = document.getElementById("losses");
let $guesses = document.getElementById("guesses");
let $prevGuess = document.getElementById("prevGuess");


function log(message) {
  if (debug) {
    console.log(message);
  }
};

function randomLetterPicker() {
  let letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

  var randLetter = letters[Math.floor(Math.random() * letters.length)];

  log(`Random Letter is: ${randLetter}`);
  return randLetter;
};

function reset() {
  guesses = 10;
  prevGuesses = "";
  log("****************");
  log("GAME OVER");
  compPick = randomLetterPicker();
  log(`Wins: ${wins}`);
  log(`Losses: ${losses}`);
  log("****************");
  $guesses.textContent = guesses;
  $prevGuess.textContent = "-";
}

compPick = randomLetterPicker();

document.onkeyup = function (event) {
  userGuess = event.key;

  if (userGuess === compPick) {
    log("win");
    wins++;
    $wins.textContent = wins;
    reset();
  } else if (userGuess != compPick) {
    log("incorrect");
    guesses--;
    log(`Previous Guesses: ${prevGuesses += userGuess}`);
    $prevGuess.textContent = prevGuesses;
    log(`Remaing guesses: ${guesses}`);
    $guesses.textContent = guesses;
  }

  if (guesses === 0) {
    losses++;
    $losses.textContent = losses;
    reset();
  }
};
reset();
