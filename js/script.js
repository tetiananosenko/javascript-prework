let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('The number drawn is: ' + randomNumber);

let computerMove = 'unknown move';

if (randomNumber == 1) {
    computerMove = 'stone';
} else if (randomNumber == 2) {
    computerMove = 'paper';
} else if (randomNumber == 3) {
    computerMove = 'scissors';
}

printMessage('My move: ' + computerMove);

let playerInput = prompt('Choose your move! 1: stone, 2: paper, 3: scissors.');

console.log('The player entered: ' + playerInput);

let playerMove = 'unknown move';

if (playerInput == '1') {
    playerMove = 'stone';
} else if (playerInput == '2') {
    playerMove = 'paper';
} else if (playerInput == '3') {
    playerMove = 'scissors';
}

printMessage('Your move: ' + playerMove);

if (computerMove == 'stone' && playerMove == 'paper') {
    printMessage('You won!');
} else if (computerMove == 'paper' && playerMove == 'scissors') {
    printMessage('You won!');
} else if (computerMove == 'scissors' && playerMove == 'stone') {
    printMessage('You won!');
} else if (computerMove == 'paper' && playerMove == 'paper') {
    printMessage('You have a draw!');
} else if (computerMove == 'scissors' && playerMove == 'scissors') {
    printMessage('You have a draw!');
} else if (computerMove == 'stone' && playerMove == 'stone') {
    printMessage('You have a draw!');
} else if (playerMove == 'unknown move') {
    printMessage('Please choose from 1 to 3!');
} else {
    printMessage('You lost!');
}
