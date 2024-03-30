const playerPrompt = "Rock, Paper, or Scissors?";
const rock_paper_scissors_selection = ["Rock", "Paper", "Scissors"]
let win = "You win! ";
let lose = "You lose. Better luck next time.";

let randomNum = Math.floor(Math.random()*9)%3;

function getComputerChoice(randomNum) {
    return rock_paper_scissors_selection[randomNum];
}

function getPlayerSelection() {
    prompt(playerPrompt).toLowerCase();
}


let computerSelection = getComputerChoice(randomNum);
let playerSelection = getPlayerSelection();
let roundOutcome = "if/elses failed";
function gameRound(playerSelection, computerSelection) {
   // if(playerSelection == computerSelection) {
   //     roundOutcome = "It's a draw. Try again!"; }
   /* else */ if (playerSelection == "rock" && computerSelection == "Scissors") {
        roundOutcome = win + "Rock crushes Scissors."; }
    else if (playerSelection == "scissors" && computerSelection == "Paper") {
        roundOutcome = win + "Scissors cuts Paper."; }
    else if (playerSelection == "paper" && computerSelection == "Rock") {
        roundOutcome = win + "Paper covers Rock."; }
    else roundOutcome = "You lose. Better luck next time.";
    }
function playRound() {
    prompt(playerPrompt).toLowerCase()
    getComputerChoice(randomNum);
    gameRound(playerSelection, computerSelection);
}

playRound();
console.log(roundOutcome);