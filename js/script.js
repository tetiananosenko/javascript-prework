document.getElementById('stone').addEventListener('click', function () {
    playGame(1);
});
document.getElementById('paper').addEventListener('click', function () {
    playGame(2);
});
document.getElementById('scissors').addEventListener('click', function () {
    playGame(3);
});


function playGame(playerInput) {

    const randomNumber = Math.floor(Math.random() * 3 + 1);
    const computerMove = getMoveName(randomNumber);
    const playerMove = getMoveName(playerInput);

    clearMessages();

    function getMoveName(argMoveId) {
        if (argMoveId == 1) {
            return 'stone';
        } else if (argMoveId == 2) {
            return 'paper';
        } else if (argMoveId == 3) {
            return 'scissors';
        }
        printMessage('I do not know id ' + argMoveId + '.');
        return 'null';
    }

    function displayResult(argComputerMove, argPlayerMove) {

        printMessage('I played ' + argComputerMove + ', and you ' + argPlayerMove);

        if ((argComputerMove == 'stone' && argPlayerMove == 'paper') || (argComputerMove == 'paper' && argPlayerMove == 'scissors') || (argComputerMove == 'scissors' && argPlayerMove == 'stone')) {
            printMessage('You won!');
        } else if (argComputerMove == argPlayerMove) {
            printMessage('You have a draw!');
        } else {
            printMessage('You lost!');
        }

    }

    displayResult(computerMove, playerMove);
}




