import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'

import store from './flow/store.js'
import Game from './components/game.jsx'

document.addEventListener('DOMContentLoaded', function() {
	console.log('index.jsx loaded ::: store state:', store.getState())
	ReactDOM.render(
		<Provider store={store}>
			<Game />
		</Provider>,
		document.getElementById('app')
	)
})
