// called into store.js

import actions from './actions.js'

const initialState = [];

var hotColdReducer = function(state, action) {
	var state = state || initialState;
	var randomNumber;

	if (action.type === actions.NEW_GAME) {
		(function(min, max) {
			randomNumber = Math.floor(Math.random() * (max - min +1)) + min;
		})(1, 100);
		return Object.assign({}, state, {
			newGame: true,
			randomNumber: randomNumber,
			guess: '',
			prevGuess: [],
			feedbackMsg: ''
		});
	}
	else if (action.type === actions.NUMBER_GUESS) {
		var guess = action.guess;
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
	var feedbackMsg = '';
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