$(document).ready(function(){

// array with strings of quotes
var quotes = [
		"here is a quote",
		"this is another",
		"why not add one more"
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
document.getElementById("quote").innerHTML = ' /" + newQuote + /" ';

});

	
	





