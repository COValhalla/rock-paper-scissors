// create a function computerPlay that generates the computer's move
function computerPlay(){
    //Create an integer between 0 and 2
    result = Math.floor(Math.random()*3)
    //Assign random integer to each value and return the result
    if (result === 0){
        return 'rock'
    }else if (result === 1){
        return 'paper'
    }else {
        return 'scissors'
    }
}

//Takes players input and only accepts rock, paper, or scissors.
function playerChoice() {
    let userInput;
    while (userInput != 'rock' && userInput != 'paper' && userInput != 'scissors'){
        userInput = prompt('Enter rock, paper, or scissors.')
        userInput = userInput.toLowerCase();
    }
    return userInput;
}

//Function that plays one round with playerSelection and computerSelection
function gameRound (playerSelection, computerSelection){
    playerSelection = playerChoice();
    computerSelection = computerPlay();
// console.log(gameRound(playerSelection, computerSelection));
    
    //rock cases
    if (playerSelection == 'rock' && computerSelection == 'scissors') {
        return 'Rock beats scissors! You win!'
    } else if (playerSelection == 'rock' && computerSelection == 'rock'){
        return 'Draw! Both players selected rock.'
    } else if (playerSelection =='rock' && computerSelection == 'paper') {
        return 'Paper beats rock! You lose.'
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

//Create a function called game() that plays 5 total games and keeps track of the score and reports the winner.

function game(){
    //initialize variables
    let playerSelection;
    let computerSelection;
    let gameCounter = 0;
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {

        //Play one round and record result
        testResults = gameRound(playerSelection, computerSelection);
        gameCounter = ++gameCounter
        if (testResults.includes('win')) {
            playerScore = ++playerScore;
        } else if (testResults.includes('lose')){
            computerScore = ++computerScore;
        }
        //Report results each game.
        alert(`Player score: ${playerScore} - Computer score ${computerScore} - Total games: ${gameCounter}`);
    }
    //Report match winner
    if (playerScore > computerScore) {
        alert(`The player wins with ${playerScore} wins!`)
    } else if(playerScore < computerScore) {
        alert(`The computer wins with ${computerScore} wins!`)
    } else {
        alert(`The game is a draw with ${playerScore} wins each.`)
    }
    
}   

game();