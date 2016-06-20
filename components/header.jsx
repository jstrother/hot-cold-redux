// called into game.jsx

import React from 'react'
import {connect} from 'react-redux'
import Modal from './modal.jsx'
import Nav from './nav.jsx'

console.log('header.jsx loaded')

const Header = React.createClass({
	newGame: function() {
		this.props.dispatch(
			actions.newGame()
		)
	},
	numberGuess: function() {
		this.props.dispatch(
			actions.numberGuess(guess)
		)
	},
	render: function() {
		<Header className="header">
			<h1>HOT or COLD</h1>
			<Nav />
			<Modal />
		</Header>
	}
});

const mapStateToProps = function(state, props) {
	return {

	};
}

const HeaderContainer = connect(mapStateToProps)(Header)

module.exports = HeaderContainer
