var React = require('react');
var Backbone = require('backbone');

module.exports = React.createClass({
	render:function(){
		return(
			<div className = 'nav-wrapper'>
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


// <div class="nav-wrapper">
//       <a href="#" class="brand-logo">Logo</a>
//       <ul id="nav-mobile" class="right hide-on-med-and-down">
//         <li><a href="sass.html">Sass</a></li>
//         <li><a href="badges.html">Components</a></li>
//         <li><a href="collapsible.html">JavaScript</a></li>
//       </ul>
//     </div>