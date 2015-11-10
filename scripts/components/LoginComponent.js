var React= require('react');
var Backbone = require('backbone');


module.exports = React.createClass({
	getInitialState: function(){
        return{
            error: null
        }
    },
	render:function(){
		var errorElement = (<div className="red lighten-1">{this.state.error}</div>);
		return(
			 <div className="LoginComponent">
				<div className="row">
					{errorElement}
					<form className="col s12" onSubmit={this.onLogin}>
					<div className="row">
						<div className="row">
							<div className="input-field col s12">
								<input id="email" type="email" className="validate" ref="email" />
								<label htmlFor="email">Email</label>
							</div>
						</div>
						<div className="row">
							<div className="input-field col s12">
								<input id="password" type="password" className="validate" ref="password" />
								<label htmlFor="password">Password</label>
							</div>
						</div>
						<button type="submit" ref='button'className="btn-large waves-effect heroButton">Sign-In</button>
					</div>
					</form>
				</div>
			</div>
		);
	},
	onLogin: function(e) {
		e.preventDefault();
		this.refs.button.disabled = true;
		console.log(this.refs.password.value)
		// var user = new Parse.User();
		Parse.User.logIn(
			this.refs.email.value,
			this.refs.password.value,
			{
				//routes user to home page when they successfully log in
				success: (u) => {
					this.props.router.navigate('profile', {trigger: true})
				},//gives user error message when they enter in no/wrong info
				error: (u, error) => {
					this.setState({
						error: error.message
					});
					this.refs.button.disabled = false;
				}
			}	
		);
	}
});