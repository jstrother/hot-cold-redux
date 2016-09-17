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
					<input type="text" name="userGuess" id="userGuess" ref="userGuess" className="text" maxlength="3" autocomplete="off" placeholder="Enter your Guess" required autofocus />
			  			<button type="submit" id="guessButton" ref="guessButton" className="button" name="submit" value="Guess" onClick={this.onGuessClick}>Guess!</button>
				</form>
	  		<p>Total Guesses: <span id="guessCount" ref="guessCount">{this.props.prevGuess.length}</span></p>
				<p>
					Your previous best record was {this.props.leastGuesses} guesses!
				</p>	
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
