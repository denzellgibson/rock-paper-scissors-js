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
    alert(userChoice + " vs. " + computerChoice + ". User " + result + "! \n User Score: " + humanScore + "\n Computer Score: " + computerScore);
}

function playerRound(userChoice, computerChoice) {
    if (userChoice == computerChoice) {
        outputResult(userChoice, computerChoice, "ties");
    }
    else if (userChoice == "rock" && computerChoice == "paper") {
        computerScore++;
        outputResult(userChoice, computerChoice, "loses");
    }
    else if (userChoice == 'rock' && computerChoice == 'scissors') {
        humanScore++;
        outputResult(userChoice, computerChoice, 'wins');
    }
    else if (userChoice == 'paper' && computerChoice == 'rock') {
        humanScore++;
        outputResult(userChoice, computerChoice, 'wins');
    }
    else if (userChoice == 'paper' && computerChoice == 'scissors') {
        computerScore++;
        outputResult(userChoice, computerChoice, 'loses');
    }
    else if (userChoice == 'scissors' && computerChoice == 'rock') {
        computerScore++;
        outputResult(userChoice, computerChoice, 'loses');
    }
    else if (userChoice == 'scissors' && computerChoice == 'paper') {
        humanScore++;
        outputResult(userChoice, computerChoice, 'wins');
    }
    else {
        alert("Not a valid input");
    }
}

let humanScore = 0, computerScore = 0;
let userChoice = prompt("Rock, Paper, or Scissors?").toLowerCase();
let computerChoice = getComputerChoice();

playerRound(userChoice, computerChoice);






