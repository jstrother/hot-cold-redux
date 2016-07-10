// called into store.js

const actions = require('./actions.js');
const fetchLeastGuesses = require('./actions.js').fetchLeastGuesses;

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
	var state = state || initialState;

	switch(action.type) {

		case actions.NEW_GAME:
			return Object.assign({}, state, initialState);
			break;
		
		case actions.NUMBER_GUESS:
			let feedbackMsg = compareNumbers(action.guess, state.randomNumber, state.prevGuess.length + 1);
			return Object.assign({}, state, {
				newGame: false,
				guess: action.guess,
				prevGuess: [
					...state.prevGuess,
					state.guess
				],
				feedbackMsg: feedbackMsg
			});
			break;

		case actions.OPEN_MODAL:
			return Object.assign({}, state, {
				show: true
			});
			break;

		case actions.CLOSE_MODAL:
			return Object.assign({}, state, {
				show: false
			});
			break;

		case actions.FETCH_LEAST_GUESS_SUCCESS:
			console.log('in reducer success',  action)
			const leastGuesses = compareLeast(action.leastGuesses, state.prevGuess.length, state.guess, state.randomNumber);
			console.log('in reducer success',  leastGuesses)
			return Object.assign({}, state, {
				leastGuesses: leastGuesses
			});
			break;

		case actions.FETCH_LEAST_GUESS_ERROR:
			throw new Error('something went wrong!!!');
	};

	return state;
};

function compareNumbers(compare1, compare2, length) {
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

function compareLeast(leastGuesses, newGuesses, guess, randomNumber) {
	// the issue is in here where the incorrect number is being passed around somehow
	debugger;
	console.log('start', 'leastGuesses', leastGuesses, 'newGuesses', newGuesses, 'guess', guess, 'randomNumber', randomNumber);
	
	const diff = Math.abs(guess - randomNumber);

	console.log('diff', diff)
	
	if (diff === 0 && guess > 0 && leastGuesses > newGuesses && newGuesses > 0) {
		
		console.log('if', 'leastGuesses', leastGuesses, 'newGuesses', newGuesses, 'guess', guess, 'randomNumber', randomNumber);
	
		return newGuesses;
	}
	
	else {
	
		console.log('else', 'leastGuesses', leastGuesses, 'newGuesses', newGuesses, 'guess', guess, 'randomNumber', randomNumber);
	
		return leastGuesses;
	}
}

exports.hotColdReducer = hotColdReducer;