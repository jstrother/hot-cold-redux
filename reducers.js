const actions = require('./actions.js');

var initialState = [];

var hotColdReducer = function(state, action) {
	state = state || initialState;
	switch (action.type) {
		case actions.NEW_GAME:
			return state.concat({
				
			});
			break;
		case actions.NUMBER_GUESS:
			return state.concat({
				guess: guess
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