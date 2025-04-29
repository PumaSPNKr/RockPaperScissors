function getComputerChoice(){
    let computerChoice = Math.random();

    if (computerChoice <= 0.33){
        return "rock";
    } else if (computerChoice <= 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    let humanChoice = window.prompt('Enter "Rock", "Paper", or "Scissors"');
    
    return humanChoice.toLowerCase();
}

function displayChoices(humanChoice, computerChoice) {
    console.log ("You chose " + humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1) +
                 ". Computer chose " + computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)
                  + ". ");
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice == "rock"){
        if (computerChoice == "paper") {
            displayChoices(humanChoice, computerChoice);
            console.log("You lose!");
            computerScore++;
        } else if (computerChoice == "scissors") {
            displayChoices(humanChoice, computerChoice);
            console.log("You win!");
            humanScore++;
        } else {
            displayChoices(humanChoice, computerChoice);
            console.log("You tied!");
        }
    }

    if (humanChoice == "paper"){
        if (computerChoice == "scissors") {
            displayChoices(humanChoice, computerChoice);
            console.log("You lose!");
            computerScore++;
        } else if (computerChoice == "rock") {
            displayChoices(humanChoice, computerChoice);
            console.log("You win!");
            humanScore++;
        } else {
            displayChoices(humanChoice, computerChoice);
            console.log("You tied!");
        }
    }

    if (humanChoice == "scissors"){
        if (computerChoice == "rock") {
            displayChoices(humanChoice, computerChoice);
            console.log("You lose!");
            computerScore++;
        } else if (computerChoice == "paper") {
            displayChoices(humanChoice, computerChoice);
            console.log("You win!");
            humanScore++;
        } else {
            displayChoices(humanChoice, computerChoice);
            console.log("You tied!");
        }
    }
}

// let humanChoice = getHumanChoice();
// let computerChoice = getComputerChoice();


let humanScore, computerScore = 0;
playRound(getHumanChoice(), getComputerChoice());