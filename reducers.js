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
			return state.concat({

			});
			break;
		case actions.NUMBER_GUESS:
			var guess = action.guess;
			var guessCount = 0;
			var prevGuess = [];
			compareNumbers(guess, randomNumber);
			return state.concat({

			});
			break;
		case actions.INFO_SCREEN:
			return state.concat({
				
			});
			break;
	};

	return state;
};

function difference(num1, num2) {
  return Math.abs((num1 - num2));
}
function compareNumbers(compare1, compare2) {
  guessCount++;
  prevGuess.push(' ' + userGuess);
  $('#feedback p').text('');
  if (difference(compare1, compare2) == 0) {
    $('#feedback p').text('You got it in ' + guessCount + ' guesses! Great guess!');
  } else {
      if (difference(compare1, compare2) >= 60) {
          $('#feedback p').text('Freezing');
      } else if (difference(compare1, compare2) >= 45) {
          $('#feedback p').text('Cold.');
      } else if (difference(compare1, compare2) >= 35) {
          $('#feedback p').text('So-so.');
      } else if (difference(compare1,compare2) >= 15 ) {
          $('#feedback p').text('Warmer!');
      }else if (difference(compare1, compare2) >= 5) {
          $('#feedback p').text('HOT HOT HOT!!!');
      } else {
          $('#feedback p').text('Almost standing on it!');
      }
  }
  $('#guessCount').text(guessCount);
}

exports.hotColdReducer = hotColdReducer;