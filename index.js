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

// function playRound(humanChoice, computerChoice) {
//     if (humanChoice == "rock"){
//         if (computerChoice == "paper") {
//             displayChoices(humanChoice, computerChoice);

//             computerScore++;
//         } else if (computerChoice == "scissors") {
//             console.log ("You chose " + humanChoice[0].toUpperCase() + ". Computer chose " +
//             computerChoice[0].toUpperCase() + ". You lose!");
//             computerScore++;
//         }
//     }

// }

let humanChoice = getHumanChoice();
let computerChoice = getComputerChoice();
displayChoices(humanChoice, computerChoice);

let humanScore, computerScore = 0;