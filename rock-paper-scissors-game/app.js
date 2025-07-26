const userChoiceDisplay = document.getElementById("your-choice");
const computerChoiceDisplay = document.getElementById("computer-choice");
const resultDisplay = document.getElementById("result");
const possibleChoices = document.querySelectorAll("button");

var userClickedChoice;
var result;

possibleChoices.forEach((possibleChoices) =>
  possibleChoices.addEventListener("click", (e) => {
    userClickedChoice = e.target.id;
    userChoiceDisplay.innerHTML = userClickedChoice;

    generateComputerChoice();
    getResult();
  })
);

// Computer choice generator f^n
function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3) + 1;

  if (randomNumber === 1) {
    computerChoice = "rock";
  }
  if (randomNumber === 2) {
    computerChoice = "paper";
  }
  if (randomNumber === 3) {
    computerChoice = "scissors";
  }
  computerChoiceDisplay.innerHTML = computerChoice;
}

//Result F^n
function getResult() {
  if (computerChoice === userClickedChoice) {
    result = "It's a Draw!";
  }
  if (computerChoice === "rock" && userClickedChoice == "paper") {
    result = "You Won";
  }
  if (computerChoice === "rock" && userClickedChoice == "scissors") {
    result = "You Lost";
  }
  if (computerChoice === "paper" && userClickedChoice == "rock") {
    result = "You Lost";
  }
  if (computerChoice === "paper" && userClickedChoice == "scissors") {
    result = "You Won";
  }
  if (computerChoice === "scissors" && userClickedChoice == "paper") {
    result = "You Lost";
  }
  if (computerChoice === "scissors" && userClickedChoice == "rock") {
    result = "You Won";
  }
  resultDisplay.innerHTML = result;
}
