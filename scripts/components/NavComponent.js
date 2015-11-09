var React = require('react');
var Backbone = require('backbone');

module.exports = React.createClass({
	componentWillMount: function(){
        this.props.router.on('route', () => {
            this.forceUpdate();
        });
        $(document).ready(function(){
            $(".button-collapse").sideNav();
            $(".dropdown-button").dropdown();
        });

    },
	render:function(){
		var currentUser = Parse.User.current();
        var allLinks = [];
        <ul id="dropdown1" className="dropdown-content">
			<li key="signout"><a href='' onClick={this.signOut}>Sign-Out</a></li>
			<li><a href="#!">two</a></li>
			<li className="divider"></li>
			<li><a href="#!">three</a></li>
		</ul>
        if(currentUser){
            allLinks.push(<li><a className="dropdown-button" href="#!" data-activates="dropdown1">{currentUser.get('firstName')}<i className="material-icons right">arrow_drop_down</i></a></li>);
             
        }else{
            allLinks.push(this.links('login', 'Login'));
            allLinks.push(this.links('signup', 'Sign-Up'));
        }
		return(
			<div className = 'nav-wrapper'>
				<div className = 'image-div'>
					<a href = '#'>
						<img className ='logo' src='../../images/tpwd-logo-large.gif' />
						<span>Texas Parks & WildLife</span>
					</a>
				</div>
				<ul id="nav-mobile" className="right hide-on-small-and-down">
                        {allLinks}
                    </ul>
                    <ul className="side-nav" id="mobile">
                        {allLinks}
                </ul>
			</div>
		);
	},
	links: function(url, label) {
        var currentUrl = Backbone.history.getFragment();
        if(currentUrl === url) {
            return (<li className="active" key={url}><a href={'#'+url}>{label}</a></li>);
        }
        else {
            return (<li key={url}><a href={'#'+url}>{label}</a></li>);
        }
    },
    signOut: function(e){
        e.preventDefault();
        Parse.User.logOut();
        this.props.router.navigate('', {trigger: true});
    }
});



// <div className = 'user-dropdown'>
// 					<a href='#'>
// 						<img className = 'avatar size32' src='../../images/lIHOd7iM_normal.jpg' />
// 					</a>
// 				</div>
// <div class="nav-wrapper">
//       <a href="#" class="brand-logo">Logo</a>
//       <ul id="nav-mobile" class="right hide-on-med-and-down">
//         <li><a href="sass.html">Sass</a></li>
//         <li><a href="badges.html">Components</a></li>
//         <li><a href="collapsible.html">JavaScript</a></li>
//       </ul>
//     </div>