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
