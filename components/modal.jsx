// called into header.jsx

import React from 'react';
import { connect } from 'react-redux';

const HeaderModal = React.createClass({
	onCloseClick: function() {
		this.setState({
			open: !this.state.open
		});
	},
	render: function() {
		return (
			<div className="overlay" id="modal" ref="modal">
				<div className="content">
					<h3>What do I do?</h3>
					<div>
						<p>This is a Hot or Cold Number Guessing Game. The game goes like this: </p>
						<ul>
							<li>1. I pick a <strong>random secret number</strong> between 1 to 100 and keep it hidden.</li>
							<li>2. You need to <strong>guess</strong> until you can find the hidden secret number.</li>
							<li>3. You will <strong>get feedback</strong> on how close ("hot") or far ("cold") your guess is.</li>
						</ul>
						<p>So, Are you ready?</p>
						<button className="close" onClick={this.onCloseClick}>Got It!</button>
					</div>
				</div>
			</div>
		);
	}
});

const Container = connect()(HeaderModal);

module.exports = Container;
