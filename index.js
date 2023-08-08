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

function showMessage(text, time) {
    let index = 0;
    let interval;

    function generateText() {
        let div = document.querySelector('#notifications');
        if (index >= text.length) {
            clearInterval(interval)
            return;
        };
        div.textContent += text[index];
        index++;
    }
    let div = document.querySelector('#notifications');
    div.textContent = '';
    return {
        start: function() {
            interval = setInterval(generateText, time);
        },
        stop: function() {
            clearInterval(interval);
        }
    };
}


/*
    Plays a single round of rock paper scissor. 
*/
function playRound(e) {
    let computerSelection = getComputeChoice();
    let text = 'AI has chosen their weapon!';
    let temp = showMessage(text, 100);
    temp.start();

    let userSelection = e.target.getAttribute('data-key');
    console.log(userSelection)
    if (computerSelection === userSelection.toLowerCase()){
        console.log("This round is a draw!")
        return 0;
    }
    if (computerSelection == 'rock' && userSelection == 'scissors' || 
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

window.addEventListener('click', playRound);

// game();