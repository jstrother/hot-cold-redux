import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './flow/store.js';
import Game from './components/game.jsx';

console.log('store', store);

document.addEventListener('DOMContentLoaded', function() {
	console.log('index.jsx loaded');
	ReactDOM.render(
		<Provider store={store}>
			<Game />
		</Provider>,
		document.getElementById('app')
	);
});
