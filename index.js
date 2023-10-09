let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0, 
    ties: 0 
  };

  updateScoreElement();

  
function playRound(playerSelection) {
  const computerSelection = getComputerChoice();

  let result = '';

  if (playerSelection === 'scissors') {

    if (computerSelection === 'rock') {
      result = ' You lose.';
    } 

    else if (computerSelection === 'paper') {
      result = ' You win.';
    }

    else if (computerSelection === 'scissors') {
      result = ' Tie.';
    }
  }
  
  else if (playerSelection === 'paper') {
    if (computerSelection === 'rock') {
      result = ' You win.';
    } 

    else if (computerSelection === 'paper') {
      result = ' Tie.';
    }

    else if (computerSelection === 'scissors') {
      result = ' You lose.';
    }
  }

  else if (playerSelection === 'rock') {
    if (computerSelection === 'rock') {
      result = ' Tie.';
    } 

    else if (computerSelection === 'paper') {
      result = ' You lose.';
    }

    else if (computerSelection === 'scissors') {
      result = ' You win.';
    }
  }

  if (result === ' You win.') {
    score.wins += 1;
  }
    else if (result === ' You lose.') {
      score.losses += 1;
    }
    else if (result === ' Tie.') {
      score.ties += 1;
    }

    localStorage.setItem('score', JSON.stringify(score));

    updateScoreElement();

    document.querySelector('.js-result').innerHTML = result;

    document.querySelector('.js-moves').innerHTML = 
    `You picked <img src="${playerSelection}-emoji.png" class="move-icon"> and Computer picked
    <img src="${computerSelection}-emoji.png" class="move-icon">`;
    

}

function updateScoreElement() {

    document.querySelector('.js-score')
        .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;

}

function getComputerChoice() {
  const randomNumber = Math.random();

  let computerSelection = '';

  if(randomNumber >= 0 && randomNumber < 1 / 3 ) {
    computerSelection = 'rock';
  }
  else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerSelection ='paper';
  }
  else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerSelection = 'scissors';
  }

  return computerSelection;
}

