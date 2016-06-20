// called into header.jsx

import React from 'react'
import {connect} from 'react-redux'

console.log('nav.jsx loaded')

const Nav = React.createClass({
	onWhatClick: function() {
		console.log('onWhatClick')

	},
	onNewClick: function() {
		console.log('onNewClick')

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
})

const NavContainer = connect()(Nav)

module.exports = NavContainer
