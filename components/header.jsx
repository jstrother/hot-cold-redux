// called into game.jsx

var React = require('react');
var connect = require('react-redux').connect;
var HeaderNav = require('./nav.jsx');
var HeaderModal = require('./modal.jsx');
var newGame = require('../flow/actions.js').newGame;

const TopHeader = React.createClass({
	onWhatClick: function() {
		console.log('onWhatClick');

	},
	onNewClick: function() {
		console.log('onNewClick');
		this.props.dispatch(
			newGame()
		)
	},
	render: function() {
		return (
		<div className="header">
			<h1>HOT or COLD</h1>
			<HeaderNav 
					onWhatClick={this.props.onWhatClick}
					onNewClick={this.props.onNewClick} />
			<HeaderModal
					onCloseClick={this.props.onCloseClick} />
		</div>
		)
	}
});

const mapStateToProps = function(state, props) {
	return {

	};
};

const Container = connect(mapStateToProps)(TopHeader);

module.exports = Container;
