// called into index.jsx

var React = require('react');
var connect = require('react-redux').connect;
var TopHeader = require('./header.jsx');
var MainSection = require('./section.jsx');
var numberGuess = require('../flow/actions.js').numberGuess;
var fetchLeastGuessSuccess = require('../flow/actions.js').fetchLeastGuessSuccess;

const Game = React.createClass({
	onGuessClick: function(guess) {
		this.props.dispatch(
			numberGuess(guess, this.props.randomNumber, this.props.prevGuess.length + 1)
		)
	},
	render: function() {
		return (
			<div className="game">
				<TopHeader
					show={this.props.show} />
				<MainSection
					onGuessClick={this.onGuessClick}
					feedbackMsg={this.props.feedbackMsg}
					guess={this.props.guess}
					prevGuess={this.props.prevGuess}
					leastGuesses={this.props.leastGuesses} />
			</div>
		);
	}
});

const mapStateToProps = function(state, props) {
	return {
		feedbackMsg: state.feedbackMsg,
		guess: state.guess,
		prevGuess: state.prevGuess,
		show: state.show,
		leastGuesses: state.leastGuesses,
		randomNumber: state.randomNumber
	};
};

const Container = connect(mapStateToProps)(Game);

module.exports = Container;
