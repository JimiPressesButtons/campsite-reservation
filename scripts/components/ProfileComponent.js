var React= require('react');
var Backbone = require('backbone');
var CampsiteModel = require('../models/CampsiteModel.js');
var ReservationModel = require('../models/ReservationModel.js');
var ParkModel = require('../models/ParkModel.js');

module.exports = React.createClass({
	getInitialState:function(){
		return{
			reservations: []
		};
	},
	componentWillMount:function(){
		console.log(Parse.User.current().id);
		var reservationQuery = new Parse.Query(ReservationModel);
		let targetUserModel = new Parse.User({objectId: Parse.User.current().id});
		reservationQuery.include(['campsiteId']);
		reservationQuery.include(['campsiteId.parkId']);
		reservationQuery.equalTo('userId',targetUserModel).find().then(
			(reservations)=>{
				this.setState({reservations:reservations})
			 }
		);
	},
	render:function(){
		console.log(this.state.reservations);
		var reservationsArray = this.state.reservations.map(
			(reservation)=>{
				return(
					<tr>
						<td>{reservation.id}</td>
						<td>{reservation.get('campsiteId').get('parkId').get('name')}</td>
						<td>{reservation.get('campsiteId').get('type')}</td>
						<td>{reservation.get('startDate').toString().substring(4,15)} - {reservation.get('endDate').toString().substring(4,15)}</td>
					</tr>
				);
			}
		);
		return(
			<div className='container'>
				<div className='banner z-depth-2'>
					<h2 className='center'>PROFILE</h2>
				</div>	
				<div className='row'>

					<div id='tango'className ='col m12 z-depth-3'>
						<div id='tangoCash'className='col m12'>
							<h3>{Parse.User.current().get('firstName')} {Parse.User.current().get('lastName')}</h3>
							 <table className='highlight'>
								<thead>
									<tr>
										<th data-field="reservationId">Reservation Id</th>
										<th data-field="park">Park</th>		
										<th data-field="campsiteType">Campsite Type</th>
										<th data-field="date">Date</th>
									</tr>
								</thead>

								<tbody>
									{reservationsArray}
								</tbody>
							</table>
						</div>
					</div>		
				</div>
			</div>
		);
	}
});