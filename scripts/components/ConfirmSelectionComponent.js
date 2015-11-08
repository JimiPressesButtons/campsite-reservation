var React= require('react');
var Backbone = require('backbone');
var StatusBarComponent = require('./StatusBarComponent.js');
var CampsiteModel = require('../models/CampsiteModel.js');
var ReservationModel = require('../models/ReservationModel.js');
var ParkModel = require('../models/ParkModel.js');


module.exports = React.createClass({
	getInitialState:function(){
		return{
			reservationList:[],
			campsiteType:null,
			startDate: null,
			endDate: null,
			park: null
		};
	},
	componentWillMount:function(){
		console.log(this.props.reservationId);
		// this.setState ({reservationList: this.props.reservationId});
		var reservationQuery = new Parse.Query(ReservationModel);
		reservationQuery.include(['campsiteId']);
		reservationQuery.include(['campsiteId.parkId']);
		reservationQuery.get(this.props.reservationId).then(
			(reservations)=>{
				console.log(reservations)
				console.log(reservations.get('campsiteId').id);
				console.log(reservations.get('campsiteId').get('type'));
				console.log(reservations.get('campsiteId').get('parkId').get('name'));
				console.log(reservations.get('startDate'));
				console.log(reservations.get('endDate'));
				this.setState({park: reservations.get('campsiteId').get('parkId').get('name')});
				this.setState({campsiteType: reservations.get('campsiteId').get('type')});
				this.setState({startDate: reservations.get('startDate').toString().substring(0,15)});
				this.setState({endDate: reservations.get('endDate').toString().substring(0,15)});
			 }
		);
	},
	componentDidMount:function() {
		// var campsiteQuery = new Parse.Query(CampsiteModel);
		// var targetModel = new CampsiteModel({objectId:this.state.campsite});
	},
	render:function(){
			var reservationList = this.state.reservationList.map(
			(reservation)=>{
				let boundItemClick = this.onCampsiteSelect.bind(this, campsite);
				return(
					<div onClick={boundItemClick} className="listItem" >{reservation}</div> 
				);
			}
		);
					// 		<div id='selectList' className ='col m3'>
					// 	<ul>{this.state.reservationList}</ul>
					// </div>
		return(
			<div className='container'>
				<div className='row'>
					<StatusBarComponent status='confirmSelection'/>

					<div id='tango'className ='col m8 offset-m2'>
						<div id='tangoCash'className='col m12'>
							<h3>{this.state.park}</h3>
							<h4>{this.state.campsiteType}</h4>
							<h5>{this.state.startDate}</h5>
							<h5>{this.state.endDate}</h5>
							<button className='confirmationButton btn waves-effect' onClick={this.onConfirm}>Confirm</button>
							<button className='confirmationButton btn waves-effect' onClick={this.onCancel}>Cancel</button>
							
						</div>
					</div>		
				</div>
			</div>
		);
	},
	onCancel:function(){
		this.props.router.navigate('#park', {trigger: true});

	},
	onConfirm:function(){
		this.props.router.navigate('#checkout/'+this.props.reservationId, {trigger: true});
	}
});
