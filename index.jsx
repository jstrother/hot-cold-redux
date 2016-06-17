const React = require('react');
const ReactDOM = require('react-dom');
const Provider = require('react-redux').Provider;

const store = require('./flow/store.js');
const Game = require('./components/game.jsx');

document.addEventListener('DOMContentLoaded', function() {
	ReactDOM.render(
		<Provider store={store}>
			<Game />
		</Provider>
	)
});
