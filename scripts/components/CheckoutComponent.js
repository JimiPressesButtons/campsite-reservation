var React= require('react');
var Backbone = require('backbone');
var StatusBarComponent = require('./StatusBarComponent.js');

module.exports = React.createClass({
	render:function(){
		console.log(this.props.reservationId);
		return(
			<div className='container'>
				<div className='row'>
					<StatusBarComponent status='checkout'/>
					<div id='selectList' className ='col m3'>
						<ul></ul>
					</div>
					<div ref='calendar'id='calendar'className ='col m8'>
						<input type='text' ref='ccNum' placeholder='FAKE Credit Card Number' />
						<input type='text' ref='ccSec' placeholder='Three digit security number' />
						<input type='text' ref='ccExp' placeholder='Expiration Date' />
					</div>		
				</div>
			</div>
		);
	}



});

// NZCzkWMr0J