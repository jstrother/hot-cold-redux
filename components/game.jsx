// called into index.jsx

var React = require('react');
var connect = require('react-redux').connect;
var TopHeader = require('./header.jsx');
var MainSection = require('./section.jsx');
var numberGuess = require('../flow/actions.js').numberGuess;

const Game = React.createClass({
	onGuessClick: function(guess) {
		console.log(guess);
		this.props.dispatch(
			numberGuess(guess)
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
					prevGuess={this.props.prevGuess} />
			</div>
		);
	}
});

const mapStateToProps = function(state, props) {
	return {
		feedbackMsg: state.feedbackMsg,
		guess: state.guess,
		prevGuess: state.prevGuess,
		show: state.show
	};
};

const Container = connect(mapStateToProps)(Game);

module.exports = Container;
