var React= require('react');
var Backbone = require('backbone');
var ParkModel = require('../models/ParkModel.js');

module.exports = React.createClass({
	getInitialState: function(){
		return{
			parkName: null,
			parkDescription: null,
			parkId: null
		};	
	},
	componentWillMount: function(){
		var parkInfo = new Parse.Query(ParkModel);
		parkInfo.get(this.props.parkId).then(
			(park)=>{
				this.setState({parkName : park.get('name')});
				// this.setState({parkDescription : park.get('description')});
				// this.setState({parkId : park.id});
			}
		);
	},
	render: function(){
		return(
			<div id= 'parkDetail'className ='seven columns'> 
				<h2>{this.state.parkName}</h2>

			</div>
		);
	}
});