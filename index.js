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

function showMessage(text, time, callback) {
    let index = 0;
    let interval;
    let div = document.querySelector('#notifications');

    function generateText() {
        if (index >= text.length) {
            clearInterval(interval);
            callback();
            return;
        };
        div.textContent += text[index];
        index++;
    }

    div.textContent = '';
    interval = setInterval(generateText, time);
};

/*
    Plays a single round of rock paper scissor. 
*/
function playRound(e) {
    let userScore = 0
    let computerScore = 0
    let round = document.querySelector('.roundNumber');
    round.textContent = (parseInt(round.textContent) + 1).toString();
    let computerSelection = getComputeChoice();
    let userSelection = e.target.getAttribute('data-key');
    let weaponsChosenText = `you chose: ${userSelection}, AI chose: ${computerSelection}`;

    showMessage(weaponsChosenText, 100, setTimeout(function() {
        let result = '';
        if (computerSelection === userSelection){
            result = "This round is a draw!"
            showMessage(result, 100, setTimeout(() => {}, result.length * 1000));
        }
        else if (computerSelection == 'rock' && userSelection == 'scissors' || 
            computerSelection == 'scissors' && userSelection == 'paper' || 
            computerSelection == 'paper' && userSelection == 'rock') {

            result = computerSelection + " beats " + userSelection
            showMessage(result, 100, result.length * 1000);

            let aiScore = document.querySelector('.aiScore');
            let aiNewScore = parseInt(aiScore.textContent) + 1;
            aiScore.textContent = aiNewScore.toString(); 
        }
        else {
            result = userSelection + " beats " + computerSelection;
            showMessage(result, 100, result.length * 1000);

            let humanScore = document.querySelector('.humanScore');
            let newHumanScore = parseInt(humanScore.textContent) + 1;
            humanScore.textContent = newHumanScore.toString();
        }
    }, weaponsChosenText.length * 100 + 1000));

    if (round.textContent == '5') {
        let humanScore = document.querySelector('.humanScore');
        let aiScore = document.querySelector('.aiScore');

        if (parseInt(aiScore.textContent) > parseInt(humanScore.textContent)) {
            showMessage('AI Wins Rock, Paper, Scissors!', 100, setTimeout(() => {}, 'AI Wins Rock, Paper, Scissors!'.length * 1000));
        }
        else {
            showMessage('You win Rock, Paper, Scissors!', 100, setTimeout(() => {}, 'You win Rock, Paper, Scissors!'.length * 1000));
        }
        humanScore.textContent = '0'
        round.textContent = '0';
        aiScore.textContent = '0';
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
            showMessage("You won round " + (i + 1), 100, () => {});
        }
        else {
            computerScore += 1;
            showMessage("AI wins round " + (i + 1), 100, () => {});
        }
        console.log("User score: " + userScore)
        console.log("computer score: " + computerScore)
    }

    if (userScore == computerScore) console.log("There are no winners in this game!")
    else if (userScore > computerScore) console.log("You win!")
    else console.log("You lose!")
}
showMessage('Let the Battles Begin!', 100, setTimeout(() =>{}, 'Let the Battles Begin!'.length * 1000));
window.addEventListener('click', playRound);