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

// action for "What?" info screen
const INFO_SCREEN = 'INFO_SCREEN';
const infoScreen = function() {
	return {
		type: INFO_SCREEN
	};
};

exports newGame = newGame;
exports.numberGuess = numberGuess;
exports.infoScreen = infoScreen;