function rollDice() {
    var dice = new DiceNumber();
    
    checkForDoubles(dice);
    
    return dice;
};

function DiceNumber() {
    this.dice1 = Math.floor((Math.random() * 6) + 1);
    this.dice2 = Math.floor((Math.random() * 6) + 1);
};

function checkForDoubles(dice) {
  dice.doubles = dice.dice1 === dice.dice2 ? true : false;
};