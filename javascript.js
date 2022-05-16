//declare variables
let computerSelection;
let playerSelection;
let playerScore = 0;
let computerScore = 0;
let gameCounter = 0;

//Scoreboard initilization 
const pScore = document.querySelector('.playerScore');
pScore.textContent = `Player Score: ${playerScore}`;
const cScore = document.querySelector('.computerScore');
cScore.textContent = `Computer Score: ${computerScore}`;
const tGames = document.querySelector('.totalGames');
tGames.textContent = `Total Games: ${playerScore + computerScore}`;

//Records player's result and updates scoreboard, on 5 wins announces winner and resets scoreboard
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playerSelection = button.id;
        testResults = gameRound(playerSelection, computerSelection);

        if (testResults.includes('win')) {
            playerScore = ++playerScore;
        } else if (testResults.includes('lose')) {
            computerScore = ++computerScore;
        }

        if (playerScore >= computerScore) {
            i = playerScore;
        } else {
            i = computerScore;
        }
        gameCounter = ++gameCounter
        pScore.textContent = `Player Score: ${playerScore}`;
        cScore.textContent = `Computer Score: ${computerScore}`;
        tGames.textContent = `Total Games: ${gameCounter}`;


        if (playerScore >= 5){
            pScore.textContent = 'You win the match!';
            playerScore = computerScore = gameCounter = 0;
        } else if (computerScore >=5) {
            cScore.textContent = 'The computer wins the match!';
            playerScore = computerScore = gameCounter = 0;
        }
    })
});

//Play's one round, returns result
function gameRound (playerSelection, computerSelection){
    computerSelection = computerPlay();

    //rock cases
    if (playerSelection == 'rock' && computerSelection == 'scissors') {
        return 'Rock beats scissors! You win!';
    } else if (playerSelection == 'rock' && computerSelection == 'rock'){
        return 'Draw! Both players selected rock.';
    } else if (playerSelection =='rock' && computerSelection == 'paper') {
        return 'Paper beats rock! You lose.';
    //paper cases
    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
        return 'Paper beats rock! You win!'
    } else if (playerSelection == 'paper' && computerSelection == 'paper'){
        return 'Draw! Both players selected paper.'
    } else if (playerSelection =='paper' && computerSelection == 'scissors') {
        return 'Scissors beats paper! You lose.'
    //scissors cases
    }else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        return 'Scissors beats paper! You win!'
    } else if (playerSelection == 'scissors' && computerSelection == 'scissors'){
        return 'Draw! Both players selected scissors.'
    } else if (playerSelection =='scissors' && computerSelection == 'rock') {
        return 'Rock beats scissors! You lose.'
    }
}

function computerPlay(){//Records computer round result
    result = Math.floor(Math.random()*3)
    if (result === 0){
        return 'rock'
    }else if (result === 1){
        return 'paper'
    }else {
        return 'scissors'
    }
};