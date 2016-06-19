// called into header.jsx

const React = require('react');

console.log('nav.jsx loaded');

var Nav = React.createClass({
	onWhatClick: function() {

	},
	onNewClick: function() {

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
