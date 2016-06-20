// called into index.jsx

import React from 'react'
import {connect} from 'react-redux'
import Header from './header.jsx'
import Section from './section.jsx'

console.log('game.jsx loaded');

var Game = React.createClass({
	newGame: function() {
		
	},
	numberGuess: function() {

	},
	render: function() {
		<div className="game">
			<Header />
			<Section />
		</div>
	}
});

const mapStateToProps = function(state, props) {
	return {

	};
};

const Container = connect(mapStateToProps)(Game);

module.exports = Container;
