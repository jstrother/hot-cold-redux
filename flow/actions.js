// called into reducers.js

// action for new game
const newGame = () => {
	return {
		type: 'NEW_GAME'
	}
};

// action for guessing a number
const numberGuess = (guess) => {
		return {
		type: 'NUMBER_GUESS',
		guess
	}
};

exports.newGame = newGame;
exports.numberGuess = numberGuess;