function getComputerChoice(){
    let computerChoice = Math.random();

    if (computerChoice <= 0.33){
        return "Rock";
    } else if (computerChoice <= 0.66) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

function getHumanChoice() {
    window.prompt('Enter "Rock", "Paper", or "Scissors"');
}

console.log(getComputerChoice());
let humanChoice = getHumanChoice();