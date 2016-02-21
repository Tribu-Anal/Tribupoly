"use strict";

$('#start').click(function() {
    let namePlayer1 = $('#p1name').val(),
        namePlayer2 = $('#p2name').val();
    
    if (namePlayer1.length === 0 || namePlayer2.length === 0) {
        alert("You must enter your names!");
        return;
    }
    
    let tokenPlayer1 = $('#tokens1 input').val(),
        tokenPlayer2 = $('#tokens2 input').val();
    
    if (tokenPlayer1 === tokenPlayer2) {
        alert("You must choose different tokens!");
        return;
    }
    
    selectToken(tokenPlayer1, namePlayer1);
    selectToken(tokenPlayer2, namePlayer2);
    
    advanceTurn();
    
    //hideStartModal();
    //showDiceModal();
    //setupBoard();
});

$('#dice').click(function() {
    
});