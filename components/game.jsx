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

// Game component breaks down into Header and Section components
// -- Header component breaks down into Nav and Modal components
// ---- Nav is a base component
// ---- Modal is a base component
// -- Section is a base component