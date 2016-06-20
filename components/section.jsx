// called into game.jsx

import React from 'react';
import { connect } from 'react-redux';

console.log('section.jsx loaded');

const Section = React.createClass({
	numberGuess: function(guess) {
		this.props.dispatch(
			actions.numberGuess(guess)
		)
	},
	onGuessClick: function() {
		console.log('onGuessClick')
		this.props.onGuessClick(this.props)
	},
	render: function() {
		return (
			<section className="game">
				<h2>Make your Guess!</h2>
				<form>
					<input type="text" name="userGuess" id="userGuess" ref="userGuess" className="text" maxlength="3" autocomplete="off" placeholder="Enter your Guess" required />
			  			<button type="submit" id="guessButton" ref="guessButton" className="button" name="submit" value="Guess" onClick={this.onGuessClick} />
				</form>
			  		<p>Guess #<span id="guessCount" ref="guessCount">0</span>!</p>
				<ul id="guessList" ref="guessList" className="guessBox clearfix">
					<div id="feedback" ref="feedback">
						<p>Give it your best!</p>
					</div>
				</ul>
			</section>
		);
	}
});

const SectionContainer = connect()(Section);

module.exports = SectionContainer;
