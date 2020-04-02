const _ = require('lodash');

const computerPlay = () => {
    return _.sample(['Rock', 'paper', 'Scissors'])
}

const playRound = (playerSelection, computerSelection) => {
    //papel ganha de pedra.
    //pedra ganha de tesolra.
    //tesolra ganha de papel.
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if (playerSelection == computerSelection) {
        console.log('the game tied!');

    } else if (playerSelection == 'rock') {
        if (computerSelection == 'scissors') {
            console.log('you wins!');
        } else {
            console.log('you lose!');
        }
    } else if (playerSelection == 'paper') {
        if (computerSelection == 'rock') {
            console.log('you wins!');
        } else {
            console.log('you lose!');
        }

    } else if (playerSelection == 'scissors') {
        if (computerSelection == 'paper') {
            console.log('you wins!');
        } else {
            console.log('you lose');
        }
    }

}

const playerSelection = 'rock';
const computerSelection = computerPlay();


console.log(console.log(playRound(playerSelection, computerSelection)));