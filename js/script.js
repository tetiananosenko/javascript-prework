function playGame(playerInput) {
    clearMessages();

    function getMoveName(argMoveId) {
        if (argMoveId == 1) {
            return 'stone';
        } else if (argMoveId == 2) {
            return 'paper';
        } else if (argMoveId == 3) {
            return 'scissors';
        } else {
            printMessage('I do not know id ' + argMoveId + '.');
            return 'unknown move';
        }
    }

    function displayResult(argComputerMove, argPlayerMove) {
        if (argPlayerMove == 'unknown move') {
            printMessage('Please choose from 1 to 3!');
            return;
        }

        printMessage('I played ' + argComputerMove + ', and you ' + argPlayerMove);

        if (argComputerMove == 'stone' && argPlayerMove == 'paper') {
            printMessage('You won!');
        } else if (argComputerMove == 'paper' && argPlayerMove == 'scissors') {
            printMessage('You won!');
        } else if (argComputerMove == 'scissors' && argPlayerMove == 'stone') {
            printMessage('You won!');
        } else if (argComputerMove == 'paper' && argPlayerMove == 'paper') {
            printMessage('You have a draw!');
        } else if (argComputerMove == 'scissors' && argPlayerMove == 'scissors') {
            printMessage('You have a draw!');
        } else if (argComputerMove == 'stone' && argPlayerMove == 'stone') {
            printMessage('You have a draw!');
        } else {
            printMessage('You lost!');
        }

    }

    let randomNumber = Math.floor(Math.random() * 3 + 1);

    console.log('The number drawn is: ' + randomNumber);

    let computerMove = getMoveName(randomNumber);

    console.log('The player entered: ' + playerInput);

    let playerMove = getMoveName(playerInput);

    displayResult(computerMove, playerMove);
    

}

document.getElementById('stone').addEventListener('click', function () {
    playGame(1);
});
document.getElementById('paper').addEventListener('click', function () {
    playGame(2);
});
document.getElementById('scissors').addEventListener('click', function () {
    playGame(3);
});


