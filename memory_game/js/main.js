var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];

cardsInPlay.push("cards[cardId]");

console.log("User flipped queen");
console.log("User flipped king");

var checkForMatch = function () {
if (cardsInPlay[0] === cardsInPlay[1]) {
console.log("You found a match!");
} else {
console.log("Sorry, try again.");	
}
}

var flipCard = function (cardId) {
	console.log("User flipped" + " " + cards[cardId]);
	checkForMatch(0,1);
}


