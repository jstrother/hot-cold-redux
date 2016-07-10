const express = require('express');
const bodyParser = require('body-parser');
const	jsonParser = bodyParser.json();

const Least = function() {
	this.leastGuesses = 1000;
};

Least.prototype.edit = function(guess) {
	this.leastGuesses = guess;
	return guess;
};

const least = new Least();

const app = express();
app.use('/', express.static('public'));

app.get('/guesses', function(request, response) {
	console.log('app.get', least.leastGuesses);
	response.json({leastGuesses: parseInt(least.leastGuesses, 10)});
});

app.post('/guesses', jsonParser, function(request, response) {
	console.log('app.post', request.body)
	let guess = least.edit(request.body.leastGuesses);
	response.status(201).json({leastGuesses: parseInt(guess, 10)});
});

app.listen(8080);