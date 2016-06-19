// called into reducers.js

// action for new game
const NEW_GAME = 'NEW_GAME';
const newGame = function() {
	return {
		type: NEW_GAME
	};
};

// action for guessing a number
const NUMBER_GUESS = 'NUMBER_GUESS';
const numberGuess = function(guess) {
		return {
		type: NUMBER_GUESS,
		guess: guess
	};
};

exports.newGame = newGame;
exports.numberGuess = numberGuess;