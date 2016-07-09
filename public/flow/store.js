// called into index.jsx

import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';

const thunk = require('redux-thunk').default;

const hotColdReducer = require('./reducers.js').hotColdReducer;

const store = createStore(hotColdReducer, applyMiddleware(thunk));

module.exports = store;