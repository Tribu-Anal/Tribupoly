var currentPlayer = null;
var turnIndx = 0;

function advanceTurn () {
    if (turnIndx === Players.length) turnIndx = 0;

    currentPlayer = Players[turnIndx];
    turnIndx++;
}