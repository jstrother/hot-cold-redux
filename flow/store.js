// called into index.jsx

var redux = require('redux');
var createStore = require('redux').createStore;
var hotColdReducer = require('./reducers.js').hotColdReducer;

const store = createStore(hotColdReducer);

module.exports = store;