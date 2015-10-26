var React = require('react');
var Backbone = require('backbone');

module.exports = React.createClass({
	render:function(){
		return(
			<div className = 'nav-bar'>
				<div className = 'image-div'>
					<a href = '#'>
						<img className ='logo' src='../../images/tpwd-logo-large.gif' />
						<span>Texas Parks & WildLife</span>
					</a>
				</div>
				<div className = 'user-dropdown'>
					<a href='#'>
						<img className = 'avatar size32' src='../../images/lIHOd7iM_normal.jpg' />
					</a>
				</div>
			</div>
		);
	}
});