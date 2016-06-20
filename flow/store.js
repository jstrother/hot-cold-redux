// called into index.jsx

import redux from 'redux';
import {createStore} from 'redux';
import reducers from './reducers.js';

const store = createStore(reducers.hotColdReducer);

module.exports = store;