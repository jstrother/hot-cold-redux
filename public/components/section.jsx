// called into game.jsx

var React = require('react');
var connect = require('react-redux').connect;

const MainSection = React.createClass({
	onGuessClick: function(event) {
		event.preventDefault();
		this.props.onGuessClick(this.refs.userGuess.value);
		this.refs.userGuess.value='';
	},
	render: function() {
		return (
			<section className="game">
				<h2>Make your Guess!</h2>
				<form>
					<input type="text" name="userGuess" id="userGuess" ref="userGuess" className="text" maxlength="3" autocomplete="off" placeholder="Enter your Guess" required autofocus />
			  			<button type="submit" id="guessButton" ref="guessButton" className="button" name="submit" value="Guess" onClick={this.onGuessClick}>Guess!</button>
				</form>
	  		<p>Total Guesses: <span id="guessCount" ref="guessCount">{this.props.prevGuess.length}</span></p>
				<div>
					Your previous best record is {this.props.leastGuesses}!
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
