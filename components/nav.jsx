const React = require('react');

console.log('nav.jsx loaded');

var Nav = React.createclass({
	render: function() {
		return (
			<nav> 
				<ul className="clearfix">
					<li className="what" onClick={}>What ?</li>
					<li className="new" onClick={}>+ New Game</li>
				</ul>
			</nav>
		);
	}
});

module.exports = Nav;
