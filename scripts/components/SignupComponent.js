var React= require('react');
var Backbone = require('backbone');
var UserModel = require('../models/UserModel.js');

module.exports = React.createClass({
	getInitialState: function(){
        return {
            error: null
        }
    },
    render: function(){
        var errorElement = (<div className="red lighten-1">{this.state.error}</div>);
        return(
            <div className="SignUpComponent">
                    <div className="row">
                        {errorElement}
                        <form className="col s12" onSubmit={this.signUp}>
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
                                <div className="input-field col s6">
                                    <input id="firstName" type="text" className="validate" ref="firstName" />
                                    <label htmlFor="firstName">First Name</label>
                                </div>
                                <div className="input-field col s6">
                                    <input id="lastName" type="text" className="validate" ref="lastName" />
                                    <label htmlFor="lastName">Last Name</label>
                                </div>
                                <div className="row">
                                    {this.state.showFamilyCode ? <div className="input-field col s6">
                                        <input id="familyCode" type="text" ref="familyCode" />
                                        <label htmlFor="familyCode">Family Code </label>
                                    </div> : <div className="optional col s6">Already have a family code, then click here!
                                        <i className="material-icons">play_arrow</i></div>}
                                    <a className="btn-floating btn-large waves-effect waves-light" onClick={this.showFamily}><i className="material-icons">add</i></a>
                                </div>
                                <button type="submit" className="btn-large waves-effect col s6 heroButton">Sign-Up</button>
                            </div>
                        </form>
                    </div>
            </div>
        )
    },
    signUp: function(e){
        e.preventDefault();
        var user = new Parse.User();
		user.signUp(
			{
				firstName: this.refs.firstName.value,
				lastName: this.refs.lastName.value,
				username: this.refs.firstName.value+this.refs.lastName.value,
				password: this.refs.password.value,
				email: this.refs.email.value,
			},
			{
				success: (u) => {
					this.props.router.navigate('', {trigger: true});
				},
				error: (u, error) => {
					this.setState({
						error: error.message
					});
				}
			}
		);
    }
});