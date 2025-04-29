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

function displayScore(humanScore, computerScore) {
    console.log("\nYour Score: " + humanScore + " Computer Score: " + computerScore);
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice == "rock"){
        if (computerChoice == "paper") {
            displayChoices(humanChoice, computerChoice);
            console.log("You lose!");
            return false;
        } else if (computerChoice == "scissors") {
            displayChoices(humanChoice, computerChoice);
            console.log("You win!");
            return true;
        } else {
            displayChoices(humanChoice, computerChoice);
            console.log("You tied!");
            return null;
        }
    }

    if (humanChoice == "paper"){
        if (computerChoice == "scissors") {
            displayChoices(humanChoice, computerChoice);
            console.log("You lose!");
            return false;
        } else if (computerChoice == "rock") {
            displayChoices(humanChoice, computerChoice);
            console.log("You win!");
            return true;
        } else {
            displayChoices(humanChoice, computerChoice);
            console.log("You tied!");
            return null;
        }
    }

    if (humanChoice == "scissors"){
        if (computerChoice == "rock") {
            displayChoices(humanChoice, computerChoice);
            console.log("You lose!");
            return false;
        } else if (computerChoice == "paper") {
            displayChoices(humanChoice, computerChoice);
            console.log("You win!");
            return true;
        } else {
            displayChoices(humanChoice, computerChoice);
            console.log("You tied!");
            return null;
        }
    }
}



function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    let roundResult = null;

    for (let i = 0; i < 5; i++){
        if (playRound(getHumanChoice(), getComputerChoice())){
            humanScore++
        }


    }
}

