// action for selecting random number to start
const RANDOM_NUMBER = 'RANDOM_NUMBER';
const randomNumber = function() {
	const max = 100;
	const min = 1;
	return random = Math.floor(Math.random() * (max - min + 1)) + min;
};

// action for guessing a number
const NUMBER_GUESS = 'NUMBER_GUESS';
const numberGuess = function() {

};

// action for comparing numbers
const NUMBER_COMPARE = 'NUMBER_COMPARE';
const numberCompare = function(random, guess) {

};

// action for displaying number of guess
const GUESS_DISPLAY = 'GUESS_DISPLAY';
const guessDisplay = function() {

};

// action for displaying numbers already guessed
const NUMBER_DISPLAY = 'NUMBER_DISPLAY';
const numberDisplay = function() {

};

// action for "What?" info screen
const INFO_SCREEN = 'INFO_SCREEN';
const infoScreen = function() {

};

// action for new game
const NEW_GAME = 'NEW_GAME';
const newGame = function() {

};