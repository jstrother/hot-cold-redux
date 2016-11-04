// called into header.jsx

const React = require('react');
const connect = require('react-redux').connect;
const HeaderModal = require('./modal.jsx');
const newGame = require('../flow/actions.js').newGame;
const openModal = require('../flow/actions.js').openModal;
const fetchLeastGuesses = require('../flow/actions.js').fetchLeastGuesses;

const HeaderNav = React.createClass({
	onWhatClick: function() {
		this.props.dispatch(
			openModal()
		);
	},
	onNewClick: function() {
		this.props.dispatch(
			fetchLeastGuesses()
		);
		this.props.dispatch(
			newGame()
		);
	},
	render: function() {
		return (
			<nav className="modal-container"> 
				<ul className="clearfix">
					<li id="what" className="what" onClick={this.onWhatClick}>How to Play</li>
					<li id="new" className="new" onClick={this.onNewClick}>Start New Game</li>
				</ul>
				<HeaderModal
					show={this.props.show} />
			</nav>
		);
	}
});

const Container = connect()(HeaderNav);

module.exports = Container;
