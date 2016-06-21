// called into index.jsx

import redux from 'redux';
import { createStore } from 'redux';
import { hotColdReducer } from './reducers.js';

const store = createStore(hotColdReducer);

module.exports = store;