// called into index.jsx

var React = require('react');
var { connect } = require('react-redux');
var TopHeader = require('./header.jsx');
var MainSection = require('./section.jsx');
var { numberGuess } = require('../flow/actions.js');

const Game = React.createClass({
	newGame: function() {
		this.props.dispatch(
			this.newGame()
		)
	},
	onGuessClick: function(guess) {
		this.props.dispatch(
			numberGuess(guess)
		)
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

module.exports = Container;
