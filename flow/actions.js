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

const OPEN_MODAL = 'OPEN_MODAL'
const openModal = () => {
	return {
		type: OPEN_MODAL
	};
};

const CLOSE_MODAL = 'CLOSE_MODAL';
const closeModal = () => {
	return {
		type: CLOSE_MODAL
	};
};

exports.newGame = newGame;
exports.NEW_GAME = NEW_GAME;
exports.numberGuess = numberGuess;
exports.NUMBER_GUESS = NUMBER_GUESS;
exports.openModal = openModal;
exports.OPEN_MODAL = OPEN_MODAL;
exports.closeModal = closeModal;
exports.CLOSE_MODAL = CLOSE_MODAL;