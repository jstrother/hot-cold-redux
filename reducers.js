const actions = require('./actions.js');

var initialState = [];

var hotColdReducer = function(state, action) {
	state = state || initialState;
	switch (action.type) {
		case actions.NEW_GAME:
			return state.concat({
				// don't forget to create randomNumber
			});
			break;
		case actions.NUMBER_GUESS:
			return state.concat({
				// don't forget to compare to randomNumber
				// don't forget to display both total number of guesses and list of all guesses so far
			});
			break;
		case actions.INFO_SCREEN:
			return state.concat({
				
			});
			break;
	};

	return state;
};

exports.hotColdReducer = hotColdReducer;