var cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
},
{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"
}
];
var cardsInPlay = [];
var cardId;


console.log("User flipped queen");
console.log("User flipped king");

var checkForMatch = function (cardOne, cardTwo) {
if (cardsInPlay[0] === cardsInPlay[1]) {
alert("You found a match!");
} else {
alert("Sorry, try again.");	
}
}

var flipCard = function (cardId) {
	console.log("User flipped " + cards[cardId].rank);	
}

cardsInPlay.push(cards.rank);


console.log(cards.cardImage);
console.log(cards.suit);

checkForMatch(1,2);