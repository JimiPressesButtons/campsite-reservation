var React= require('react');
var Backbone = require('backbone');
var StatusBarComponent = require('./StatusBarComponent.js');

module.exports = React.createClass({
	render:function(){
		console.log(this.props.reservationId);
		return(
			<div className='container'>
			<div className='banner'>
				<h2 className='center'>Checkout</h2>
			</div>
				<div className='row'>
					<div ref='calendar'id='calendar'className ='col m10 offset-m1'>
						<div id='calendarBox' className ='col m12'>
							<div id='calendarInnerBox' className ='col m12'>
								<div className="input-field col s6">
									<input id="name" type="text" className="validate" ref="name" />
									<label htmlFor="email">Name on Credit Card</label>
								</div>
								<div className="input-field col s6">
									<input id="address" type="text" className="validate" ref="address" />
									<label htmlFor="address">Billable Address</label>
								</div>
								<div className="input-field col s12">
									<input type='text' ref='ccNum' />
									<label htmlFor="credit card">Credit Card Number</label>
								</div>
								<div className="input-field col s4 offset-m1">
									<input type='text' ref='ccSec'/>
									<label htmlFor="secNum">Security Number</label>
								</div>
								<div className="input-field col s4 offset-m1">
									<input type='text' ref='ccExp'/>
									<label htmlFor="expDate">Expiration Date</label>
								</div>
								<br/>
								<div className="input-field col s4 offset-m8">
									<button className='checkoutButton btn waves-effect right' onClick={this.onConfirm}>Confirm</button>
									<button className='checkoutButton btn waves-effect right' >Cancel</button>	
								</div>
							</div>
						</div>
					</div>		
				</div>
			</div>
		);
	},
	onConfirm:function(){
		this.props.router.navigate('profile', {trigger: true});
	}



});

// NZCzkWMr0J