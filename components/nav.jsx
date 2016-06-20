// called into header.jsx

import React from 'react'

console.log('nav.jsx loaded');

var Nav = React.createClass({
	onWhatClick: function() {
		console.log('onWhatClick');

	},
	onNewClick: function() {
		console.log('onNewClick');

	},
	render: function() {
		return (
			<nav> 
				<ul className="clearfix">
					<li className="what" onClick={this.onWhatClick}>What ?</li>
					<li className="new" onClick={this.onNewClick}>+ New Game</li>
				</ul>
			</nav>
		);
	}
});

module.exports = Nav;
