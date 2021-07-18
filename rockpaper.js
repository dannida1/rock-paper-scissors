/*
const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
        return userInput;
    } else {
        console.log('error: invalid input!!')
    }
}
*/

//gets user input and compare to items in the array
const getUserChoice = userInput => {
    selectionsArr = ['rock', 'paper', 'scissors', 'bomb'];
    userInput = userInput.toLowerCase();
    for (let i in selectionsArr) {
        if (userInput === selectionsArr[i]) {
            return userInput;
        }
    }
    console.log('error: invalid input!!');
}

//get system input
const getComputerChoice = () => {
    let randChoice = Math.floor(Math.random() * 3);
    switch (randChoice) {
        case 0:
            return 'rock';
            break;
        case 1:
            return 'paper';
            break;
        case 2:
            return 'scissors';
            break;
    }
}

//determine winner
const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
        return 'Game is tie';
    }
    if (userChoice === 'bomb') {
        return 'User won!'
    }

    if (userChoice === 'rock') {
        if (computerChoice === 'paper') {
            return 'computer won!';
        } else {
            return 'user won!';
        }
    }

    if (userChoice === 'paper') {
        if (computerChoice === 'scissors') {
            return 'Computer won!';
        } else {
            return 'user won!';
        }
    }

    if (userChoice === 'scissors') {
        if (computerChoice === 'rock') {
            return 'Computer won!';
        } else {
            return 'user won!';
        }
    }
}

//where game is played...user enters a value
const playGame = () => {
    let userChoice = getUserChoice('dannida');
    let computerChoice = getComputerChoice()

    //error handler
    if (userChoice === undefined) {
        return
    }

    console.log('User threw: ' + userChoice);
    console.log('The computer threw:' + computerChoice);
    console.log(determineWinner(userChoice, computerChoice));
}

playGame();

//console.log(determineWinner('paper', getComputerChoice()));