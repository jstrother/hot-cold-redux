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
	debugger;
		let feedbackMsg;
		let diff = Math.abs(guess - randomNumber);
		if (diff === 0) {
			return endGame(dispatch, least, guess, randomNumber);
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

const fetchLeastGuesses = (least, guess, randomNumber) => {
	return (dispatch) => endGame(dispatch, least, guess, randomNumber);
};

const compareNumbers = (compare1, compare2, length)  =>{
	let feedbackMsg;
	const diff = Math.abs(compare1 - compare2);

  if (diff == 0) {
  	if (length == 1) {
  		feedbackMsg = `You got it in ${length} guess! Great guess!`;
  	}
  	else {
  		feedbackMsg = `You got it in ${length} guesses! Great guess!`;
  	}
  }
  else {
	  if (diff >= 60) {
		  feedbackMsg = `Freezing.`;
	  }
	  else if (diff >= 45) {
	    feedbackMsg = `Cold.`;
	  }
	  else if (diff >= 35) {
	    feedbackMsg = `So-so.`;
	  }
	  else if (diff >= 15 ) {
	    feedbackMsg = `Warmer!`;
	  }
	  else if (diff >= 5) {
	    feedbackMsg = `HOT HOT HOT!!!`;
	  }
	  else {
	    feedbackMsg = `Almost standing on it!`;
	  }
	  if (compare1 > compare2) {
	    feedbackMsg += ` Lower`;
		}
		else if (compare1 < compare2) {
	    feedbackMsg += ` Higher`;
		}
  }

  return feedbackMsg;
}

function endGame(dispatch, least, guess, randomNumber) {
	const url = '/guesses';
	let method;
	let body;
	let fetchParams;
	if (least) {
		method = 'post';
		body = JSON.stringify({
							leastGuesses: least
						});
		fetchParams = {
			headers: {'Content-type': 'application/json'},
			method: method,
			body: body
		}
		feedbackMsg = compareNumbers(guess, randomNumber, least);
	}
	else {
		method = 'get';
		fetchParams = {
		method: method		
		};
		feedbackMsg = compareNumbers(guess, randomNumber, least);
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
exports.compareNumbers = compareNumbers;