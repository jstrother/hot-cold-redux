// called into header.jsx

var React = require('react');
var connect = require('react-redux').connect;
var Modal = require('./modal.jsx');
var newGame = require('../flow/actions.js').newGame;

const HeaderNav = React.createClass({
	onWhatClick: function() {
		// opens Modal
		console.log('onWhatClick');
		Modal.setState({
			open: !Modal.state.open
		});
	},
	onNewClick: function() {
		// starts new game
		console.log('onNewClick');
		this.props.dispatch(
			newGame()
		);
	},
	render: function() {
		return (
			<nav> 
				<ul className="clearfix">
					<li className="what" onClick={this.onWhatClick}>What ?</li>
					<li className="new" onClick={this.onNewClick}>+ New Game</li>
				</ul>
				<Modal
					open={this.props.open} />
			</nav>
		);
	}
});

const Container = connect()(HeaderNav);

module.exports = Container;
