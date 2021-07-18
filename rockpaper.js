const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
        return userInput;
    } else {
        console.log('error: invalid input!!')
    }
}

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

const playGame = () => {
    let userChoice = getUserChoice('paper');
    let computerChoice = getComputerChoice()

    console.log('User threw: ' + userChoice);
    console.log('The computer threw:' + computerChoice);
    console.log(determineWinner(userChoice, computerChoice));
}

playGame();

//console.log(determineWinner('paper', getComputerChoice()));