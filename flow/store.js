// called into index.jsx

const redux = require('redux');
const createStore = redux.createStore;

const reducers = require('./reducers.js');

const store = createStore(reducers.hotColdReducer);

module.exports = store;