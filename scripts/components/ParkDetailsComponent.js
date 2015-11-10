var React= require('react');
var Backbone = require('backbone');
var ParkModel = require('../models/ParkModel.js');

module.exports = React.createClass({
	// getInitialState: function(){
	// 	return{
	// 		parkName: null,
	// 		parkDescription: null,
	// 		parkId: null
	// 	};	
	// },
	// componentWillMount: function(){
	// 	var parkInfo = new Parse.Query(ParkModel);
	// 	parkInfo.get(this.props.parkId).then(
	// 		(park)=>{
	// 			this.setState({parkName : park.get('name')});
	// 			// this.setState({parkDescription : park.get('description')});
	// 			this.setState({parkId : park.id});
	// 		}
	// 	);
	// },
	render: function(){
		return(
			<div id= 'parkDetail'> 
				<img className='closeIcon' onClick={this.closePark} src='../../images/ic_highlight_off_18pt_2x.png' />
				<h3>{this.props.park.get('name')}</h3>
				<p>{this.props.park.get('description')}</p>
				<button className="btn  waves-effect" onClick={this.selectPark}>Select</button>
			</div>
		);
	},
	selectPark: function(){
		console.log('in selectPark');
		this.props.router.navigate('#campsite/'+this.props.park.id, {trigger: true});
	},
	closePark:function(){
		console.log('in closePark');
		this.props.onClose();
	}
});