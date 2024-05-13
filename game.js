function getRandomIntInclusive(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
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

function outputResult(userChoice, computerChoice, result) {
    alert("User: " + userChoice + " vs. Computer: " + computerChoice + ". User " + result + "!");
}

function playerRound(userChoice, computerChoice) {
    if (userChoice == computerChoice) {
        outputResult(userChoice, computerChoice, "ties");
    }
    else if (userChoice == "rock" && computerChoice == "paper") {
        outputResult(userChoice, computerChoice, "loses");
    }
    else if (userChoice == 'rock' && computerChoice == 'scissors') {
        outputResult(userChoice, computerChoice, 'wins');
    }
}

let userChoice = prompt("Rock, Paper, or Scissors?").toLowerCase();
let computerChoice = getComputerChoice();







