var tokensAvailables = ['Scottish Terrier', 'Automobile', 'Battleship', 'Top Hat', 'Shoe'];
var Players = [];

function Token(player, tokenName){
	this.player=player;
	this.tokenName=tokenName;
};

var getavailableTokens = function(){
	return tokensAvailables;
};

var getPlayers = function(){
	return Players;
};

var selectToken = function(token, player){
	var index = tokensAvailables.indexOf(token);
	tokensAvailables.splice(index,1);
	Players.push(new Token(player,token));
};
