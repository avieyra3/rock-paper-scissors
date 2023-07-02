/* 
    This is a script file that provides one to play Rock 
    Paper Scisspr with an ai bot
*/

function getComputeChoice() {
    let choice = Math.floor(Math.random() * 3);
    if (choice == 0) return 'rock';
    else if (choice == 1) return 'paper';
    else return 'scissors';
}

function playGame(userSelection, computerSelection) {
    if (computerSelection === userSelection.toLowerCase())
        return "tie";
    if (computerSelection == 'rock' && userSelection == 'scissor' || 
        computerSelection == 'scissors' && userSelection == 'paper' || 
        computerSelection == 'paper' && userSelection == 'rock') 
        return computerSelection + " beats " + userSelection + ". AI wins!";
    else 
        return userSelection + " beats " + computerSelection + ". You won!";
}

let computerSelection = getComputeChoice();
console.log("AI has selected their weapon!")

let userSelection = prompt("Pick you weapon: Rock, Paper or Scissors");
console.log("User has selected their weapon!")

let result = playGame(userSelection, computerSelection);

console.log(result)