// called into game.jsx

var React = require('react');
var connect = require('react-redux').connect;
var HeaderNav = require('./nav.jsx');
var newGame = require('../flow/actions.js').newGame;
var openModal = require('../flow/actions.js').openModal;


const TopHeader = React.createClass({
	render: function() {
		return (
		<div className="header">
			<h1>HOT or COLD</h1>
			<HeaderNav 
					onWhatClick={this.onWhatClick}
					onNewClick={this.onNewClick}
					show={this.props.show} />
		</div>
		)
	}
});

const Container = connect()(TopHeader);

module.exports = Container;
