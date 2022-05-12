// create a function computerPlay

function computerPlay(){
    //Create an integer between 0 and 2
    result = Math.floor(Math.random()*3)
    //Assign random integer to each value and return the result
    if (result === 0){
        return 'Rock'
    }else if (result === 1){
        return 'Paper'
    }else {
        return 'Scissors'
    }
    //Output the result to the console
}
// randomly generate a value 'rock', 'paper', 'scissors'