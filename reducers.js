const actions = require('./actions.js');

const initialState = [];

var hotColdReducer = function(state, action) {
	var state = state || initialState;
	var randomNumber;
	switch (action.type) {
		case actions.NEW_GAME:
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
			break;
		case actions.NUMBER_GUESS:
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
			break;
	};

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

  higherLower(compare1, compare2);

  return feedbackMsg;
}

function higherLower(number1, number2) {
	if (number1 > number2) {
    feedbackMsg.append(`&nbsp; Lower`);
	} else if (number1 < number2) {
    feedbackMsg.append(`&nbsp; Higher`);
	}
}

exports.hotColdReducer = hotColdReducer;