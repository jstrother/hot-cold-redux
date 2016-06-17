const actions = require('./actions.js');

var initialState = [];

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
			(function() {
	      if (guessCount != 0) {
	          if (randomNumber > userGuess) {
	              feedbackMsg.append('<br />Higher');
	          } else if (randomNumber < userGuess) {
	              feedbackMsg.append('<br />Lower');
	          }
	      }            
	  })();
			return Object.assign({}, state, {
				newGame: false,
				guess: action.guess,
				prevGuess: [
					...state.prevGuess,
					state.guess
				]
			});
			break;
	};

	return state;
};

function difference(num1, num2) {
  return Math.abs((num1 - num2));
}
function compareNumbers(compare1, compare2) {
	var feedbackMsg = '';
  if (difference(compare1, compare2) == 0) {
    feedbackMsg = (`You got it in ${prevGuess.length} guesses! Great guess!`);
    // if matching, feedbackMsg = above
  } else {
      if (difference(compare1, compare2) >= 60) {
          feedbackMsg = ('Freezing');
      } else if (difference(compare1, compare2) >= 45) {
          feedbackMsg = ('Cold.');
      } else if (difference(compare1, compare2) >= 35) {
          feedbackMsg = ('So-so.');
      } else if (difference(compare1,compare2) >= 15 ) {
          feedbackMsg = ('Warmer!');
      }else if (difference(compare1, compare2) >= 5) {
          feedbackMsg = ('HOT HOT HOT!!!');
      } else {
          feedbackMsg = ('Almost standing on it!');
      }
  }
  return feedbackMsg;
}

exports.hotColdReducer = hotColdReducer;