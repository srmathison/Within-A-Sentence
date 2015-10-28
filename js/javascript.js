$(document).ready(function(){

// array with strings of quotes
var quotes = [
		"there are no happy endings", 
		"endings are the saddest part", 
		"so just give me a happy middle",
		"and a very happy start",
		"i myself do not believe in explaining anything",
		"i believe that if you don't want to do anything",
		"then sit there and don't do it",
		"but don't expect people to hand you a corn beef sandwich and wash your socks for you and unzip your fly for you"
	];
// randomly select string/quote from array
var randomIndex = Math.floor(Math.random() * quotes.length); 
var randomString = quotes[randomIndex];
// select word from selected string
var newStr = randomString.split(" ");
for (i in newStr ) {
	var word = newStr[i];
	// shuffle word
	var newWord = _.shuffle(word).join("");
	// join newWord back to string
	newStr[i] = newWord;
}
var newQuote = newStr.join(" ");
document.getElementById("quote").innerHTML = newQuote;

});

	
	





