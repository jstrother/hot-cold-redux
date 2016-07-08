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
		leastGuesses: least
	};
};

const FETCH_LEAST_GUESS_ERROR = 'FETCH_LEAST_GUESS_ERROR';
const fetchLeastGuessError = (error) => {
	return {
		type: FETCH_LEAST_GUESS_ERROR,
		error: error
	};
};

const fetchLeastGuesses = (least) => {
	return function(dispatch) {
		const url = '/guesses';
		let method;
		let body;
		if (least) {
			method = 'post';
			body = JSON.stringify({
								leastGuesses: least
							});
		}
		else {
			method = 'get';
			body = '';
		}
		return fetch(url, {
			method: method,
			body: body
		})
		.then(function(response) {
			console.log('response', response);
			debugger;
			if (response.state < 200 || response.status >= 300) {
				let error = new Error(response.statusText);
				error.response = response;
				throw error;
			}
			return response;
		})
		.then(function(response) {
			return response.text();
		})
		.then(function(data) {
			let leastGuesses = data.leastGuesses;
			return dispatch(fetchLeastGuessSuccess(leastGuesses)
			);
		})
		.catch(function(error) {
			return dispatch(fetchLeastGuessError(error)
			);
		});
	}
}

exports.newGame = newGame;
exports.NEW_GAME = NEW_GAME;
exports.numberGuess = numberGuess;
exports.NUMBER_GUESS = NUMBER_GUESS;
exports.openModal = openModal;
exports.OPEN_MODAL = OPEN_MODAL;
exports.closeModal = closeModal;
exports.CLOSE_MODAL = CLOSE_MODAL;
exports.FETCH_LEAST_GUESS_SUCCESS = FETCH_LEAST_GUESS_SUCCESS;
exports.fetchLeastGuessSuccess = fetchLeastGuessSuccess;
exports.FETCH_LEAST_GUESS_ERROR = FETCH_LEAST_GUESS_ERROR;
exports.fetchLeastGuessError = fetchLeastGuessError;
exports.fetchLeastGuesses = fetchLeastGuesses;