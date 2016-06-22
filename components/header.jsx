// called into game.jsx

import React from 'react';
import { connect } from 'react-redux';
import HeaderNav from './nav.jsx';
import HeaderModal from './modal.jsx';
import { newGame } from '../flow/actions.js';

const TopHeader = React.createClass({
	newGame: function() {
		this.props.dispatch(
			newGame()
		)
	},
	onCloseClick: function() {
		console.log('onGuessClick')
	},
	onWhatClick: function() {
		console.log('onWhatClick')
	},
	onNewClick: function() {
		console.log('onNewClick');
		this.newGame();
	},
	render: function() {
		return (
		<div className="header">
			<h1>HOT or COLD</h1>
			<HeaderNav />
			<HeaderModal />
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
