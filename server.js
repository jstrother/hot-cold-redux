const express = require('express');
const bodyParser = require('body-parser');
const	jsonParser = bodyParser.json();

var LeastGuesses = function() {
	this.guesses = 1000;
};

LeastGuesses.prototype.edit = function(guess) {
	this.guesses = guess;
	return guess;
};

const least = new LeastGuesses();

const app = express();
app.use('/', express.static('public'));

app.get('/guesses', function(request, response) {
	response.json({guesses: parseInt(least.guesses, 10)});
});

app.post('/guesses', jsonParser, function(request, response) {
	let guess = least.edit(request.body.guesses);
	response.status(201).json({guesses: parseInt(guess, 10)});
});

app.listen(8080);