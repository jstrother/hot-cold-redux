const React = require('react');

const Modal = require('./modal.jsx');
const Nav = require('./nav.jsx');

console.log('header.jsx loaded');

var Header = React.createClass({
	newGame: function() {

	},
	numberGuess: function() {

	},
	render: function() {
		<Header className="header">
			<h1>HOT or COLD</h1>
			<Nav />
			<Modal />
		</Header>
	}
});

module.exports = Header;
