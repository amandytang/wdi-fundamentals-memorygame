var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];
var cardOne = cards[0];
var cardTwo = cards[2];

	console.log("User flipped queen");
	console.log("User flipped king");

cardsInPlay.push('cardOne');
cardsInPlay.push('cardTwo');

if (cardsInPlay.length === 2 && cardsInPlay[0] === cardsInPlay[1]) {
alert("You found a match!");
} else {
alert("Sorry, try again.");	
}
