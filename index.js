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

console.log(getComputerChoice());
let humanChoice = getHumanChoice();