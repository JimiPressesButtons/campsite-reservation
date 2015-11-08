var React= require('react');
var Backbone = require('backbone');
var _ = require('backbone/node_modules/underscore');
var CampsiteModel = require('../models/CampsiteModel.js');
var ReservationModel = require('../models/ReservationModel.js');
var ParkModel = require('../models/ParkModel.js');

module.exports= React.createClass({
	getInitialState: function(){
		return{
			readyCampsites: []
		};
	},
	componentWillMount: function(){
		console.log(this.props.campsiteType, this.props.parkId);
		console.log(this.props.startDate, this.props.endDate);
	},
	render:function(){
		return(
			<div id= 'campsiteDetail'className ='col m7 offset-m1'> 
				<img className='closeIcon' onClick={this.closePark} src='../../images/ic_highlight_off_18pt_2x.png' />
				<h3>{this.props.campsiteType}</h3>
				<button id='campsiteSelectButton'className="btn  waves-effect"onClick={this.selectCampsite}>Select</button>

			</div>
		);
	},
	selectCampsite: function(){
		console.log(this.props.startDate);
		console.log(this.props.endDate);
		// let campsitesQuery = new Parse.Query(CampsiteModel);
		// let targetParkModel = new ParkModel({objectId: this.props.parkId});
		// campsitesQuery.equalTo('parkId',targetParkModel);
		// campsitesQuery.equalTo('type',this.props.campsiteType);
		// campsitesQuery.find().then(
		// 	(campsiteList)=>{
		// 		console.log(campsiteList);
		// 		this.setState({readyCampsites:campsiteList});
		// 	},
		// 	(err)=>{
		// 		console.log(err);
		// 	}
		// );	
		let startDateQuery = new Parse.Query(ReservationModel);
		let endDateQuery = new Parse.Query(ReservationModel);
		// let reservationQuery = new Parse.Query(ReservationModel);
		let campsiteQuery = new Parse.Query(CampsiteModel);
		startDateQuery.lessThan('startDate',new Date(this.props.startDate)).greaterThan('endDate',new Date(this.props.startDate));
		endDateQuery.lessThan('startDate',new Date(this.props.endDate)).greaterThan('endDate', new Date(this.props.endDate));
		let reservationQuery = Parse.Query.or(endDateQuery,startDateQuery);
		reservationQuery.find().then(
			(reservationConflicts)=>{
				// reservationConflicts.get('campsiteId');
				console.log(reservationConflicts);
				var reservationConflictIds = reservationConflicts.map(
					(conflict)=>{
						return conflict.get('campsiteId').id;
					});
				console.log(reservationConflictIds);
				this.onGetConflicts(reservationConflictIds);
			}
		);
	},
	onGetConflicts:function(reservationConflictIds){
		console.log(this.props.startDate, this.props.endDate)
		let campsitesQuery = new Parse.Query(CampsiteModel);
		let targetParkModel = new ParkModel({objectId: this.props.parkId});
		campsitesQuery.equalTo('parkId',targetParkModel);
		campsitesQuery.equalTo('type',this.props.campsiteType);
		campsitesQuery.notContainedIn('objectId',reservationConflictIds).find().then(
			(campsiteList)=>{
				this.setState({readyCampsites:campsiteList});
				console.log(campsiteList);
				console.log(this.state.readyCampsites[0]);

				let randomCampsite = Math.floor(Math.random()*(this.state.readyCampsites.length-0)); //need to make sure this include the first and last entry.
				console.log(randomCampsite);
				console.log(this.state.readyCampsites[randomCampsite]);

				var newReservation = new ReservationModel({
					campsiteId: this.state.readyCampsites[randomCampsite],
					startDate: new Date(this.props.startDate),
					endDate: new Date(this.props.endDate)
				});
				newReservation.save({
					success: (u) => {
						this.props.router.navigate('#confirmSelection/'+newReservation.id, {trigger: true});
					}			
				});

			},
			(err)=>{
				console.log(err);
			}
		);


	},
	closePark:function(){
		console.log('in closePark');
		this.props.onClose();
	}
});