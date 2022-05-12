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

playerSelection = playerChoice();
computerSelection = computerPlay();
console.log(gameRound(playerSelection, computerSelection));