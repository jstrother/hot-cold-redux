const React = require('react');

const Header = require('./header.jsx');
const Section = require('./section.jsx');

var Game;

module.exports = Game;

// Game component breaks down into Header and Section components
// -- Header component breaks down into Nav and Modal components
// ---- Nav is a base component
// ---- Modal is a base component
// -- Section is a base component