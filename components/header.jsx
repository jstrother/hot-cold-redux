// called into game.jsx

import React from 'react'
import Modal from './modal.jsx'
import Nav from './nav.jsx'

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
