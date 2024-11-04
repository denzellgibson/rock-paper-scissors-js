function getRandomIntInclusive(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
  }

const playerChoiceLabel = document.querySelector('#PlayerChoiceLabel');
const computerChoiceLabel = document.querySelector('#ComputerChoiceLabel');
const roundResultLabel = document.querySelector('#RoundResultLabel');
const playerScoreLabel = document.querySelector('#PlayerScoreLabel');
const computerScoreLabel = document.querySelector('#ComputerScoreLabel');
const RockButton = document.querySelector("#RockButton");
const PaperButton = document.querySelector("#PaperButton");
const ScissorsButton = document.querySelector("#ScissorsButton");

let playerScore = 0;
let computerScore = 0;

RockButton.addEventListener("click", (e) => {
    playerRound('rock');
});
PaperButton.addEventListener("click", (e) => {
    playerRound('paper');
});
ScissorsButton.addEventListener("click", (e) => {
    playerRound('scissors');
});

function playerRound(userChoice) {
    let computerChoice = getComputerChoice();
    console.log('Computer Choice: ' + computerChoice);
    console.log('Player Choice: ' + userChoice);

    if (userChoice == computerChoice) {
        updateResultsDisplay("ties");
    }
    else if (userChoice == "rock" && computerChoice == "paper") {
        computerScore++;
        updateResultsDisplay('loses');
    }
    else if (userChoice == 'rock' && computerChoice == 'scissors') {
        playerScore++;
        updateResultsDisplay('wins');
    }
    else if (userChoice == 'paper' && computerChoice == 'rock') {
        playerScore++;
        updateResultsDisplay('wins');
    }
    else if (userChoice == 'paper' && computerChoice == 'scissors') {
        computerScore++;
        updateResultsDisplay('loses');
    }
    else if (userChoice == 'scissors' && computerChoice == 'rock') {
        computerScore++;
        updateResultsDisplay('loses');
    }
    else if (userChoice == 'scissors' && computerChoice == 'paper') {
        playerScore++;
        updateResultsDisplay('wins');
    }
}

function getComputerChoice() {
    let randomNumber = getRandomIntInclusive(1,3);
    if (randomNumber == 1) {
        return "rock";
    }
    else if (randomNumber == 2) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

function updateResultsDisplay(outcome) {
    playerScoreLabel.innerHTML = 'Player Score: ' + playerScore;
    computerScoreLabel.innerHTML = 'Computer Score: ' + computerScore;
    roundResultLabel.innerHTML = 'Round Result: ' + outcome;
}



/* let userChoice, computerChoice;
let humanScore = 0, computerScore = 0;
let numGames = 0; */



/* for (i = 1; i <= numGames; i++) {
    userChoice = prompt("Rock, Paper, or Scissors?").toLowerCase();
    computerChoice = getComputerChoice();
    playerRound(userChoice, computerChoice);
} */


