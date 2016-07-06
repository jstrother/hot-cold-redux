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
		type: OPEN_MODAL,
		show: true
	};
};

const CLOSE_MODAL = 'CLOSE_MODAL';
const closeModal = () => {
	return {
		type: CLOSE_MODAL,
		show: false
	};
};

const FETCH_LEAST_GUESS_SUCCESS = 'FETCH_LEAST_GUESS_SUCCESS';
const fetchLeastGuessSuccess = (least) => {
	return {
		type: FETCH_LEAST_GUESS_SUCCESS,
		least: least
	};
};

const FETCH_LEAST_GUESS_ERROR = 'FETCH_LEAST_GUESS_ERROR';
const fetchLeastGuessError = (least, error) => {
	return {
		type: FETCH_LEAST_GUESS_ERROR,
		least: least,
		error: error
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