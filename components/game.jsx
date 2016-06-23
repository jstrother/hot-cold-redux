// called into index.jsx

import React from 'react';
import { connect } from 'react-redux';
import TopHeader from './header.jsx';
import MainSection from './section.jsx';
import { numberGuess } from '../flow/actions.js';

const Game = React.createClass({
	newGame: function() {
		this.props.dispatch(
			newGame()
		)
	},
	numberGuess: function(guess) {
		this.props.dispatch(
			numberGuess(guess)
		)
	},
	onGuessClick: function(userGuess) {
		this.numberGuess(userGuess);
		// console.log('feedbackMsg (game.jsx)', feedbackMsg);
	},
	onCloseClick: function() {
		console.log('onGuessClick');
	},
	onWhatClick: function() {
		console.log('onWhatClick');
	},
	onNewClick: function() {
		console.log('onNewClick');
		this.newGame();
	},
	render: function() {
		return (
			<div className="game">
				<TopHeader />
				<MainSection
					onGuessClick={this.onGuessClick}
					feedbackMsg={this.props.feedbackMsg}
					guess={this.props.guess}
					prevGuess={this.props.prevGuess} />
			</div>
		);
	}
});

const mapStateToProps = function(state, props) {
	console.log('state', state);
	return {
		feedbackMsg: state.feedbackMsg,
		guess: state.guess,
		prevGuess: state.prevGuess
	};
};

const Container = connect(mapStateToProps)(Game);

export default Container;
