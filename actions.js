// action for new game - also where randomNumber is created
const NEW_GAME = 'NEW_GAME';
const newGame = function() {
	return {
		type: NEW_GAME
	};
};

// action for guessing a number - and then comparing it to randomNumber and displaying both the number of guesses and a list of all numbers guessed
const NUMBER_GUESS = 'NUMBER_GUESS';
const numberGuess = function(guess, random) {
		return {
		type: NUMBER_GUESS,
		guess: guess
		random: random
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
exports.guessDisplay = guessDisplay;
exports.numberDisplay = numberDisplay;
exports.infoScreen = infoScreen;