// action for new game - also where randomNumber is created
const NEW_GAME = 'NEW_GAME';
const newGame = function() {
	return {
		type: NEW_GAME
	};
};

// action for guessing a number - and then comparing it to randomNumber
const NUMBER_GUESS = 'NUMBER_GUESS';
const numberGuess = function(guess, random) {
		return {
		type: NUMBER_GUESS,
		guess: guess
		random: random
	};
};

// action for displaying number of guess
const GUESS_DISPLAY = 'GUESS_DISPLAY';
const guessDisplay = function() {
	return {
		type: GUESS_DISPLAY
	};
};

// action for displaying numbers already guessed
const NUMBER_DISPLAY = 'NUMBER_DISPLAY';
const numberDisplay = function() {
	return {
		type: NUMBER_DISPLAY
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