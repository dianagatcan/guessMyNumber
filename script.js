const startButton = document.getElementById("start");
const checkButton = document.getElementById("check");
const restartButton = document.getElementById("restart");
const input = document.getElementById("guess");
const message = document.getElementById("message");
const startMessage =
  "You have 5 attempts to guess a random number between 0 and 20.";

let randomNumber;
let totalGuesses = 5;

//generate random number when click on start game button
startButton.addEventListener("click", () => {
  message.innerHTML = startMessage;
  generateRandom();
});

function generateRandom() {
  randomNumber = Math.floor(Math.random() * 20) + 1;
  console.log(randomNumber);
}

//check the guess
checkButton.addEventListener("click", checkGuess);

function checkGuess() {
  let guess = input.value;
  totalGuesses -= 1;
  if (totalGuesses > 0) {
    if (guess == randomNumber) {
      message.innerHTML = `You won. Number was ${randomNumber}`;
    } else if (guess > randomNumber) {
      message.innerHTML = `The random number is less than ${guess}. You have ${totalGuesses} more attempts`;
    } else {
      message.innerHTML = `The random number is grater than ${guess}. You have ${totalGuesses} more attempts`;
    }
  } else {
    message.innerHTML = `You lost. Number was ${randomNumber}`;
  }
}

restartButton.addEventListener("click", () => {
  restartGame();
});

function restartGame() {
  totalGuesses = 5;
  message.innerHTML = startMessage;
}
