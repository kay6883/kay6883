const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if (
    userInput === "rock" ||
    userInput === "scissors" ||
    userInput === "paper"
  ) {
    return userInput;
  } else {
    console.log("Wrong input");
  }
};

const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
      console.log(randomNumber);
  }
};

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return "This game is a tie!";
  }
  if (userChoice === "rock") {
    if (computerChoice === "paper") {
      return "Sorry, computer won";
    } else {
      return "You win!";
    }
  }

  if (userChoice === "paper") {
    if (computerChoice === "scissors") {
      return "Computer won!";
    } else {
      return "You win";
    }
  }

  if (userChoice === "scissors") {
    if (computerChoice === "rock") {
      return "Sorry, computer won.";
    } else {
      return "You win";
    }
  }
};

const playGame = () => {
  const userChoice = getUserChoice('paper');
  const computerChoice = getComputerChoice();
  console.log("You threw: " + userChoice);
  console.log("Computer choose: " + computerChoice);

  console.log(determineWinner(userChoice, computerChoice));
};

playGame();
