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


/*
    Plays a single round of rock paper scissor. 
*/
function playRound() {
    let computerSelection = getComputeChoice();
    console.log("AI has selected their weapon!")

    let userSelection = prompt("Pick you weapon: Rock, Paper or Scissors");

    if (computerSelection === userSelection.toLowerCase()){
        console.log("This round is a draw!")
        return 0;
    }
    if (computerSelection == 'rock' && userSelection == 'scissor' || 
        computerSelection == 'scissors' && userSelection == 'paper' || 
        computerSelection == 'paper' && userSelection == 'rock') {
        console.log(computerSelection + " beats " + userSelection)
        return 1;
    }
    else {
        console.log(userSelection + " beats " + computerSelection)
        return 2;
    }
        
}

/*
    Plays 5 rounds of rock paper scissor. Prints to the console whether or not
    there is a winner or if it was a tie. 
*/
function game() {
    let userScore = 0
    let computerScore = 0

    for (let i = 0; i < 5; ++i) {
        let result = playRound();
        if (result == 0) continue;
        if (result == 2) {
            userScore += 1;
            console.log("You won round " + (i + 1));
        }
        else {
            computerScore += 1;
            console.log("AI wins round " + (i + 1));
        }
        
        console.log("User score: " + userScore)
        console.log("computer score: " + computerScore)
    }

    if (userScore == computerScore) console.log("There are no winners in this game!")
    else if (userScore > computerScore) console.log("You win!")
    else console.log("You lose!")
}

game();