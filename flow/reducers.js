// called into store.js

import actions from './actions.js';

const initialState = {
	newGame: true,
	randomNumber: (function(min, max) {
			return (Math.floor(Math.random() * (max - min + 1)) + min);
		})(1, 100),
	prevGuess: [],
	guess: '',
	feedbackMsg: 'Give it your best!'
};

const hotColdReducer = (state, action) => {
	var state = state || initialState;

	if (action.type === actions.NEW_GAME) {
		return Object.assign({}, state, initialState);
	}
	else if (action.type === actions.NUMBER_GUESS) {
		compareNumbers(guess, randomNumber);
		return Object.assign({}, state, {
			newGame: false,
			guess: action.guess,
			prevGuess: [
				...state.prevGuess,
				state.guess
			],
			feedbackMsg: feedbackMsg
		});
	}

	return state;
};

function compareNumbers(compare1, compare2) {
	console.log('compare1', compare1, 'compare2', compare2);
	const diff = Math.abs(compare1 - compare2);

  if (diff == 0) {
    feedbackMsg = `You got it in ${prevGuess.length} guesses! Great guess!`;
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
  }

  if (diff != 0) {
  	if (compare1 > compare2) {
	    feedbackMsg.append(`&nbsp; Lower`);
		}
		else if (compare1 < compare2) {
	    feedbackMsg.append(`&nbsp; Higher`);
		}
  }

  return feedbackMsg;
}

exports.hotColdReducer = hotColdReducer;