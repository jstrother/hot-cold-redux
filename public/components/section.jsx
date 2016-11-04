// called into game.jsx

const React = require('react');
const connect = require('react-redux').connect;
const fetchLeastGuesses = require('../flow/actions.js').fetchLeastGuesses;

const MainSection = React.createClass({
	componentDidMount: function() {
		this.props.dispatch(
			fetchLeastGuesses(this.props.leastGuesses)
		);
	},
	onGuessClick: function(event) {
		event.preventDefault();
		this.props.onGuessClick(this.refs.userGuess.value);
		this.refs.userGuess.value='';
	},
	render: function() {
		return (
			<section className="play">
				<h2>Make your Guess!</h2>
				<form>
					<input type="text" name="userGuess" id="userGuess" ref="userGuess" className="text" maxLength="3" autoComplete="off" placeholder="Enter your Guess" required />
			  			<button type="submit" id="guessButton" ref="guessButton" className="button" name="submit" value="Guess" onClick={this.onGuessClick}>Guess!</button>
				</form>
	  			<div id="totalGuessesDiv" ref="totalGuesses">
	  				<p>Total Guesses: <span id="guessCount" ref="guessCount">{this.props.prevGuess.length}</span></p>
	  			</div>
				<div id="leastGuessesDiv" ref="leastGuesses">
					<p>You got it in {this.props.leastGuesses} guesses!</p>
				</div>
				<ul id="guessList" ref="guessList" className="guessBox clearfix">
					<div id="feedback" ref="feedback">
						<p>{this.props.feedbackMsg}</p>
					</div>
				</ul>
			</section>
		);
	}
});

const Container = connect()(MainSection);

module.exports = Container;
