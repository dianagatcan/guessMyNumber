const startButton = document.getElementById("start");
const checkButton = document.getElementById("check");
const restartButton = document.getElementById("restart");
const input = document.getElementById("guess");
let message = document.getElementById("message");
let randomNumber;
let totalGuesses = 5;

//generate random number when click on start game button
startButton.addEventListener("click", () => {
  generateRandom();
  message.innerHTML = "You have 5 attempts";
  startButton.classList.add("disable");
  input.disabled = false;
  checkButton.disabled = false;
});

function generateRandom() {
  randomNumber = Math.floor(Math.random() * 20) + 1;
  console.log(randomNumber);
}

//check the guess
checkButton.addEventListener("click", () => {
  checkGuess();
});

function checkGuess() {
  let guess = input.value;
  console.log(randomNumber);
  totalGuesses -= 1;
  if (totalGuesses > 0) {
    if (guess == randomNumber) {
      message.innerHTML = `You won. Number was ${randomNumber}`;
      checkButton.disabled = true;
      input.disabled = true;
      restartButton.classList.remove("disable");
    } else if (guess > randomNumber) {
      message.innerHTML = `The random number is less than ${guess}. You have ${totalGuesses} more attempts`;
    } else {
      message.innerHTML = `The random number is grater than ${guess}. You have ${totalGuesses} more attempts`;
    }
  } else {
    message.innerHTML = `You lost. Number was ${randomNumber}`;
    checkButton.disabled = true;
    input.disabled = true;
    startButton.classList.remove("disable");
  }
  input.value = "";
}

restartButton.addEventListener("click", () => {
  restartGame();
  restartButton.classList.add("disable");
});

function restartGame() {
  totalGuesses = 5;
  startButton.classList.remove("disable");
}
