/* 
    This is a script file that provides one to play Rock 
    Paper Scissor with an ai bot
*/

/* global variables */
let choice = {'0': 'rock', '1': 'paper', '2': 'scissors'};
let aiScore = document.querySelector('.aiScore');
let userScore = document.querySelector('.humanScore');
let round = document.querySelector('.roundNumber');

function getComputeChoice() {
    return Math.floor(Math.random() * 3);
}

function showMessage(text, time, callback) {
    let index = 0;
    let interval;
    let div = document.querySelector('h1');

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

function displayText(text) {
    let div = document.querySelector('#notifications');
    div.textContent = text
}

function determineWinner(e) {
    let computerSelection = getComputeChoice();
    let userSelection = parseInt(e.target.getAttribute('data-key'));
    let resultMatrix = [ [0, 1, 2], [2, 0, 1], [1, 2, 0] ];
    displayText(`${choice[userSelection]} versus ${choice[computerSelection]}`);

    switch(resultMatrix[userSelection][computerSelection]) {

        case 0:
            setTimeout(() => displayText("You both chose the same weapon!"), 1000);
            setTimeout(() => displayText("This round is a draw!"), 2000);
            break;
        case 1: 
            setTimeout(() => displayText(choice[computerSelection] + " beats " + choice[userSelection]), 1000);
            setTimeout(() => displayText(`AI Wins round: ${round.textContent}`), 2000);
            aiScore.textContent = parseInt(aiScore.textContent) + 1;
            break;
        case 2:
            setTimeout(() => displayText(choice[userSelection] + " beats " + choice[computerSelection]), 1000);
            setTimeout(() => displayText(`You win round: ${round.textContent}`), 2000);
            userScore.textContent = parseInt(userScore.textContent) + 1;
            break;
    }
};

/*
    Plays a round of rock paper scissors until 5 rounds are played before reset. 
*/
function playRound(e) {
    round.textContent = (parseInt(round.textContent) + 1).toString();
    determineWinner(e);
    if (parseInt(round.textContent) >= 5) {
        if (parseInt(aiScore.textContent) > parseInt(userScore.textContent)) {
            setTimeout( () => displayText('AI wins Rock, Paper, Scissors!'), 2000);
        }
        else if (parseInt(userScore.textContent) > parseInt(aiScore.textContent)) {
            setTimeout( () => displayText('You won Rock, Paper, Scissors!'), 2000);
        }
        else {
            setTimeout( () => displayText('You and AI tied Rock, Paper, Scissors!'), 2000);
        }
        round.textContent = '0';
        aiScore.textContent = '0';
        userScore.textContent = '0';
    }

}

showMessage( 'Let the Battles Begin!', 100, setTimeout( function() {
    showMessage( 'Choose Your Weapon!', 100, setTimeout(() => {}, 'Choose Your Weapon!'.length * 100 + 1000) );
}, 'Let the Battles Begin!'.length * 100 + 1000) );

let btns = document.querySelectorAll('button');
btns.forEach(btn => btn.addEventListener('click', playRound));