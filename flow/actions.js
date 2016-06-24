// called into reducers.js

// action for new game
const NEW_GAME = 'NEW_GAME';
const newGame = () => {
	return {
		type: NEW_GAME
	};
};

// action for guessing a number
const NUMBER_GUESS = 'NUMBER_GUESS';
const numberGuess = (guess) => {
		return {
		type: NUMBER_GUESS,
		guess
	};
};

exports.newGame = newGame;
exports.NEW_GAME = NEW_GAME;
exports.numberGuess = numberGuess;
exports.NUMBER_GUESS = NUMBER_GUESS;