// called into game.jsx

import React from 'react';
import { connect } from 'react-redux';

console.log('section.jsx loaded');

const MainSection = React.createClass({
	onGuessClick: function(event) {
		console.log('onGuessClick');
		event.preventDefault();
		this.props.onGuessClick(this.refs.userGuess.value);
		this.refs.userGuess.value='';
	},
	render: function() {
		console.log("prevGuess", this.props.prevGuess);
		return (
			<section className="game">
				<h2>Make your Guess!</h2>
				<form>
					<input type="text" name="userGuess" id="userGuess" ref="userGuess" className="text" maxlength="3" autocomplete="off" placeholder="Enter your Guess" required />
			  			<button type="submit" id="guessButton" ref="guessButton" className="button" name="submit" value="Guess" onClick={this.onGuessClick}>Guess!</button>
				</form>
			  		<p>Guess #<span id="guessCount" ref="guessCount">{this.props.prevGuess.length}</span>!</p>
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
