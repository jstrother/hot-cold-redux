// called into index.jsx

import React from 'react'
import {connect} from 'react-redux'
import Header from './header.jsx'
import Section from './section.jsx'

const Game = React.createClass({
	newGame: function() {
		this.props.dispatch(
			actions.newGame()
		)
	},
	numberGuess: function(guess) {
		this.props.dispatch(
			actions.numberGuess(guess)
		)
	},
	onGuessClick: function() {
		console.log('onGuessClick')
	},
	onCloseClick: function() {
		console.log('onGuessClick')
	},
	onWhatClick: function() {
		console.log('onWhatClick')
	},
	onNewClick: function() {
		console.log('onNewClick')
	},
	render: function() {
		<div className="game">
			<Header
				onCloseClick
				onWhatClick
				onNewClick />
			<Section
				onGuessClick />
		</div>
	}
})

console.log('game.jsx state:', Game.state);

const mapStateToProps = function(state, props) {
	return {

	};
}

const GameContainer = connect(mapStateToProps)(Game)

module.exports = GameContainer
