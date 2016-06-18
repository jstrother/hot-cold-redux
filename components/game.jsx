const React = require('react');

const Header = require('./header.jsx');
const Section = require('./section.jsx');

console.log('game.jsx loaded');

var Game = React.createClass({
	newGame: function() {

	},
	numberGuess: function() {

	},
	render: function() {
		<div className="game">
			<Header />
			<Section />
		</div>
	}
});

module.exports = Game;
