const playerPrompt = "Rock, Paper, or Scissors?" ;
const choice = [null, "rock", "paper", "scissors"];
const winMessage = "You win!" ; 
const lossMessage = "You lose;" ;
const min = 0
const max = 2

const playerSelection = prompt(playerPrompt).toLowerCase();
console.log("You chose " + playerSelection + ".");

const computerSelection = choice[Math.floor(Math.random() * 3) +1];
console.log("The computer chose" + " " + computerSelection + ".");

function playRound(playerSelection, computerSelection) {
    if (playerSelection == 'rock' && computerSelection == 'scissors') {
        return winMessage + " Rock breaks scissors."}
    else if (playerSelection == 'rock' && computerSelection == 'paper') {
        return lossMessage + " paper covers rock. Better luck next time!" }
    else if (playerSelection == 'paper' && computerSelection == 'rock') {
        return winMessage + " Paper covers rock."}
    else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        return lossMessage + " scissors cuts paper. Better luck next time!"}
    else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        return winMessage + " Scissors cuts paper."}
    else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        return lossMessage + " rock breaks scissors. Better luck next time!" }
    else if (playerSelection == computerSelection) {
        return "It's a draw! Ready to play again?"}
    else return "You didn't enter a valid choice. Try again!";
    }

let roundResult = playRound(playerSelection, computerSelection);
console.log(roundResult);