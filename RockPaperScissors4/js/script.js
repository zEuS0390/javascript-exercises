let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    loses: 0,
    draws: 0
};

updateScoreElement();

function playGame(playerMove) {
    console.log(pickComputerMove());
    
    result = '';

    if (playerMove === 'scissors') {
        if (computerMove === 'rock') {
            result = 'You lose';
        } else if (computerMove === 'paper') {
            result = 'You win';
        } else if (computerMove === 'scissors') {
            result = 'Draw';
        }

    } else if (playerMove === 'paper') {
        if (computerMove === 'rock') {
            result = 'You win';
        } else if (computerMove === 'paper') {
            result = 'Draw';
        } else if (computerMove === 'scissors') {
            result = 'You lose';
        }

    } else if (playerMove === 'rock') {
        if (computerMove === 'rock') {
            result = 'Draw';
        } else if (computerMove === 'paper') {
            result = 'You lose';
        } else if (computerMove === 'scissors') {
            result = 'You win';
        }

    }

    // Update score based on the result
    if (result === 'You win') {
        score.wins += 1;
    } else if (result === 'You lose') {
        score.loses += 1;
    } else if (result === 'Draw') {
        score.draws += 1;
    }

    localStorage.setItem("score", JSON.stringify(score));

    // alert(`You picked ${playerMove}. Computer picked ${computerMove}. ${result}\nWins: ${score.wins}; Loses: ${score.loses}; Draws: ${score.draws}
    // `);

    document.querySelector('.js-result').innerHTML = result;
    document.querySelector('.js-moves').innerHTML = `
    You
    <img src="images/${playerMove}-emoji.png" class="move-icon">
    <img src="images/${computerMove}-emoji.png" class="move-icon">
    Computer
    `;

    updateScoreElement();
}

function updateScoreElement() {
    document.querySelector('.js-score')
    .innerText = `Wins: ${score.wins}; Loses: ${score.loses}; Draws: ${score.draws}`;
}

let computerMove = '';
function pickComputerMove() {
    let randomNumber = Math.random();
    if (randomNumber > 0 && randomNumber < 1/3) {
        computerMove = 'rock';
    } else if (randomNumber > 1/3 && randomNumber < 2/3) {
        computerMove = 'paper';
    } else if (randomNumber > 2/3 && randomNumber < 1) {
        computerMove = 'scissors';
    }
    return computerMove;
}