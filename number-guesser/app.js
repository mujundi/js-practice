const submitBtn = document.querySelector("#guess-value");
const guess = document.querySelector("#guess-input");
const message = document.querySelector(".message");
const min = parseInt(document.querySelector(".min-num").textContent);
const max = parseInt(document.querySelector(".max-num").textContent);

let guessHistory = [];
let remainingGuesses = 3;
let mysteryInt = getRandomIntInclusive(min, max);
let guessInt;
let gameOver = false;

submitBtn.addEventListener("click", function(e) {
  if (gameOver) {
    restartGame();
  } else {
    guessInt = parseInt(guess.value);
    checkGuess(guessInt, mysteryInt);
  }
});

function checkGuess(guessInt, answer) {
  if (isNaN(guessInt) || (guessInt < min) | (guessInt > max)) {
    message.style = "color: red";
    message.textContent = `Please enter an integer between ${min} and ${max}.`;
  } else if (guessInt === answer) {
    message.style = "color: green";
    guess.style = "border: 1px solid green";
    message.textContent = `${guessInt} is correct!`;
    endGame();
  } else {
    remainingGuesses -= 1;
    message.style = "color: red";
    if (remainingGuesses > 1) {
      message.textContent = `${guessInt} is not correct. You have ${remainingGuesses} guesses left`;
    } else if (remainingGuesses === 1) {
      message.textContent = `${guessInt} is not correct. You have 1 guess left`;
    } else {
      message.textContent = `Sorry, game over. The correct answer was ${mysteryInt}`;
      endGame();
    }
  }

  guess.value = "";
}

function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function endGame() {
  guess.disabled = true;
  submitBtn.value = "Play again";
  gameOver = true;
}

function restartGame() {
  remainingGuesses = 3;
  mysteryInt = getRandomIntInclusive(min, max);
  guessHistory = [];
  submitBtn.value = "Submit";
  message.textContent = "";
  guess.disabled = false;
  guess.value = "";
  gameOver = false;
}
