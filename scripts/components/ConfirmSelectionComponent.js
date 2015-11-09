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
			park: null,
			parkLat:null,
			parkLng:null,
			email: null
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
				this.setState({park: reservations.get('campsiteId').get('parkId').get('name')});
				this.setState({parkLat: reservations.get('campsiteId').get('parkId').get('lat')});
				this.setState({parkLng: reservations.get('campsiteId').get('parkId').get('lng')});
				this.setState({campsiteType: reservations.get('campsiteId').get('type')});
				this.setState({startDate: reservations.get('startDate').toString().substring(0,15)});
				this.setState({endDate: reservations.get('endDate').toString().substring(0,15)});
				this.setState({email:Parse.User.current().get('email')});

			 }
		);
	},
	componentDidMount: function(){
		var mapView = {lat:this.state.parkLat, lng: this.state.parkLng}
		this.map = new google.maps.Map(this.refs.map, {
			center: mapView,
			zoom: 6,
			scrollwheel: false,
    		mapTypeId: google.maps.MapTypeId.TERRAIN
		});
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
				<div className='banner z-depth-2'>
					<h2 className='center'>Confirm Reservation</h2>
				</div>	
				<div className='row'>

					<div id='tango'className ='col m12 z-depth-3'>
						<div id='tangoCash'className='col m6'>
							<h3>{this.state.park}</h3>
							<h4>{this.state.campsiteType}</h4>
							<h5>{this.state.startDate}</h5>
							<h5>{this.state.endDate}</h5>
							<h5>{this.state.email}</h5>
							<button className='confirmationButton btn waves-effect' onClick={this.onConfirm}>Confirm</button>
							<button className='confirmationButton btn waves-effect' onClick={this.onCancel}>Cancel</button>	
						</div>
						<div ref='map'id='map'className ='col m5 offset-m1'></div>
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
