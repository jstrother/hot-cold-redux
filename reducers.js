const actions = require('./actions.js');

var initialRepositoryState = [];

var hotColdReducer = function(state, action) {
	state = state || initialRepositoryState;
	switch (action.type) {
		case actions.NEW_GAME:
			return state.concat({
				// don't forget to create randomNumber
			});
			break;
		case actions.NUMBER_GUESS:
			return state.concat({
				// don't for forget to compare to randomNumber
			});
			break;
		case actions.GUESS_DISPLAY:
			return state.concat({
				
			});
			break;
		case actions.NUMBER_DISPLAY:
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

exports.hotColdReducer = hotColdReducer;