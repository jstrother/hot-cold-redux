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
const numberGuess = (guess, randomNumber, least) => {
	return (dispatch) => {
		let diff = Math.abs(guess - randomNumber);
		if (diff === 0) {
			return endGame(dispatch, least);
		}
		else {
			return dispatch({
				type: NUMBER_GUESS,
				guess
			});
		}}
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
	return (dispatch) => endGame(dispatch, least);
};

function endGame(dispatch, least) {
	const url = '/guesses';
	let method;
	let body;
	let fetchParams;
	if (least) {
		fetchParams = {
			headers: {'Content-type': 'application/json'},
			method: 'post',
			body: JSON.stringify({
							leastGuesses: least
						})

		}
	}
	else {
		fetchParams = {
		method: 'get'			
		};
	}
	return fetch(url, fetchParams)
	.then(function(response) {
		if (response.state < 200 || response.status >= 300) {
			let error = new Error(response.statusText);
			error.response = response;
			throw error;
		}
		return response;
	})
	.then(function(response) {
		return response.json();
	})
	.then(function(data) {
		let leastGuesses = data.leastGuesses;
		return dispatch(fetchLeastGuessSuccess(leastGuesses));
	})
	.catch(function(error) {
		return dispatch(fetchLeastGuessError(error));
	});
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