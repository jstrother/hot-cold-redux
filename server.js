const express = require('express');

var LeastGuesses = function() {
	this.items = [];
};
// the plan is to keep this array restricted to containing a single number- the least number of guesses used to guess the hidden hot-cold number.  I only wish to change this value if the new value is smaller than the current value. The add method below should only be used once, otherwise, use the update method.
LeastGuesses.prototype.add = function(guess) {
	let item = {guess: guess};
	this.items.push(item);
	return item;
};

const least = new LeastGuesses();

const app = express();
app.use(express.static('public'));

app.get('/guesses', function(request, response) {
	response.json(least.items);
});

app.listen(8080);