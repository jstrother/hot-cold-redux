const React = require('react');

console.log('section.jsx loaded');

var Section = React.createclass({
	render: function() {
		return (
			<section className="game">
				<h2>Make your Guess!</h2>
				<form>
					<input type="text" name="userGuess" id="userGuess" ref="userGuess" className="text" maxlength="3" autocomplete="off" placeholder="Enter your Guess" required/>
			  			<input type="submit" id="guessButton" ref="guessButton" className="button" name="submit" value="Guess"/>
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

module.exports = Section;
