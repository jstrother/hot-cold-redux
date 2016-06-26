// called into header.jsx

var React = require('react');
var connect = require('react-redux').connect;
var HeaderModal = require('./modal.jsx');
var newGame = require('../flow/actions.js').newGame;
var openModal = require('../flow/actions.js').openModal;

const HeaderNav = React.createClass({
	onWhatClick: function() {
		console.log('onWhatClick');
		console.log('modalOpen-state', this.state);
		this.props.dispatch(
			openModal()
		)
	},
	onNewClick: function() {
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
				<HeaderModal
					id='modal'
					show={this.state.show} />
			</nav>
		);
	}
});

const Container = connect()(HeaderNav);

module.exports = Container;
