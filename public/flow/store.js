// called into index.jsx

const redux = require('redux');
const createStore = require('redux').createStore;
const applyMiddleware = redux.applyMiddleware;
const thunk = require('redux-thunk');

const hotColdReducer = require('./reducers.js').hotColdReducer;

const store = createStore(hotColdReducer, applyMiddleware(thunk));

module.exports = store;