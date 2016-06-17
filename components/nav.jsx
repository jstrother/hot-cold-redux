const React = require('react');

console.log('nav.jsx loaded');

var Nav = React.createclass({
	render: function() {
		<nav> 
			<ul className="clearfix">
				<li><a className="what" href="#">What ?</a></li>
				<li><a className="new" href="#">+ New Game</a></li>
			</ul>
		</nav>
	}
});

module.exports = Nav;
