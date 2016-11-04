// called into store.js

const actions = require('./actions.js');
const fetchLeastGuesses = require('./actions.js').fetchLeastGuesses;
const compareNumbers = require('./actions.js').compareNumbers;

const hotColdReducer = (state, action) => {
	const initialState = {
		newGame: true,
		randomNumber: (function(min, max) {
				return (Math.floor(Math.random() * (max - min + 1)) + min);
			})(1, 100),
		prevGuess: [],
		guess: '',
		feedbackMsg: 'Give it your best!',
		show: false
	};
	state = state || initialState;

	switch(action.type) {

		case actions.NEW_GAME:
			return Object.assign({}, state, initialState);
		
		case actions.NUMBER_GUESS:
			let feedbackMsg = compareNumbers(parseInt(action.guess), state.randomNumber, state.prevGuess.length + 1);
			return Object.assign({}, state, {
				newGame: false,
				guess: action.guess,
				prevGuess: [
					...state.prevGuess,
					state.guess
				],
				feedbackMsg: feedbackMsg
			});

		case actions.OPEN_MODAL:
			return Object.assign({}, state, {
				show: true
			});

		case actions.CLOSE_MODAL:
			return Object.assign({}, state, {
				show: false
			});

		case actions.FETCH_LEAST_GUESS_SUCCESS:
			
			console.log('before compareLeast', 'newGuesses', state.prevGuess.length);
			const leastGuesses = compareLeast(action.leastGuesses, state.prevGuess.length, state.guess, state.randomNumber);
			console.log('after compareLeast',  leastGuesses);
			return Object.assign({}, state, {
				leastGuesses: leastGuesses
			});

		case actions.FETCH_LEAST_GUESS_ERROR:
			throw new Error('something went wrong!!!');
	}

	return state;
};

function compareLeast(leastGuesses, newGuesses, guess, randomNumber) {
	console.log('start compareLeast', 'leastGuesses', leastGuesses, 'newGuesses', newGuesses);
	
	// the following three lines adjust for state not keeping up with current guess.  it never pulls the current one, but always uses the previous.  think of it as Einstein's Cosmological Constant to help balance out and make things work correctly.
	guess = parseInt(guess);

	const smallDiff = guess - randomNumber;

	guess -= smallDiff;

	const diff = Math.abs(guess - randomNumber);

	if (diff === 0) {

		console.log('if block compareLeast', 'leastGuesses', leastGuesses, 'newGuesses', newGuesses);
	
		return newGuesses + 1;
	}
	
	else {
	
		console.log('else block compareLeast', 'leastGuesses', leastGuesses, 'newGuesses', newGuesses);
	
		return leastGuesses;
	}
}

exports.hotColdReducer = hotColdReducer;