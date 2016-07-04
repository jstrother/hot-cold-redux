// called into store.js

var actions = require('./actions.js');

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
  }

  if (diff != 0) {
  	if (compare1 > compare2) {
	    feedbackMsg += ` Lower`;
		}
		else if (compare1 < compare2) {
	    feedbackMsg += ` Higher`;
		}
  }

  return feedbackMsg;
}

exports.hotColdReducer = hotColdReducer;