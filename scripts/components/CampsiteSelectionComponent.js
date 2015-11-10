var React= require('react');
var Backbone = require('backbone');
var _ = require('backbone/node_modules/underscore');
var moment = require('../../node_modules/moment/min/moment.min.js');
var momentRange=require('../../node_modules/moment-range/dist/moment-range.min.js');
var StatusBarComponent = require('./StatusBarComponent.js');
var CampsiteDetailsComponent = require('./CampsiteDetailsComponent.js');
var CampsiteModel = require('../models/CampsiteModel.js');
var ParkModel = require('../models/ParkModel.js');

var startDate = null;
var endDate = null;

module.exports = React.createClass({
	getInitialState: function(){
		return{
			campsites:[],
			campsiteSelected:null,
			startDate: null,
			endDate: null
		};
	},
	componentWillMount: function(){
		var campsitesQuery = new Parse.Query(CampsiteModel);
		var targetParkModel = new ParkModel({objectId: this.props.parkId});
		campsitesQuery.equalTo('parkId', targetParkModel).find().then(
			(campsite)=>{
				var campsByPark = _.groupBy(campsite, function(u){
					return u.get('type');
				})
				var campsites = [];
				for(var propertyName in campsByPark){
					campsites.push(campsByPark[propertyName][0].get('type'));
				}
				this.setState({campsites:campsites});
			},
			(err) => {
            	console.log(err);
        	}
		);
	},
	render: function(){
		var campsites = this.state.campsites.map(
			(campsite)=>{
				let boundItemClick = this.onCampsiteSelect.bind(this, campsite);
				return(
					<li onClick={boundItemClick} className="collection-item listCampType" >{campsite}</li> 
				);
			}
		);
		return(
			<div className='container'>				
				<div className='row'>
					<div className='banner '>
						<h2 className='center'>Campsite Type Selection</h2>
					</div>	
					<div id='campSelectList' className ='col m3'>
						<ul className='collection with-header'> 
							<li className='collection-header listCampType'><h5>Campsite Type</h5></li>
							{campsites} 
						</ul>
					</div>
					<div ref='calendar'id='calendar'className ='col m7 offset-m1'>
						<div id='calendarBox' className ='col m12'>
							<div id='calendarInnerBox' className ='col m12'>
								<form id='dates' onSubmit={this.saveDate}>
									<label>Arrival Date</label>
									<input type='date' className='datepicker' ref='startDate' />
									<label>Departure Date</label>
									<input type='date' className='datepicker' ref='endDate' />
									<button id='calendarButton'className="btn  waves-effect">Save the date</button>
								</form>
							</div>
						</div>
					</div>
					{this.state.campsiteSelected ? <CampsiteDetailsComponent 
						router = {this.props.router} 
						parkId={this.props.parkId}
						campsiteType={this.state.campsiteSelected} 
						onClose={this.onCampsiteClose}
						startDate = {this.state.startDate}
						endDate = {this.state.endDate}
						/> : null}
				</div>
			</div>
		);
	},
	saveDate: function(e){
		e.preventDefault();
		this.setState({startDate: this.refs.startDate.value});
		this.setState({endDate: this.refs.endDate.value});
		console.log(this.state.startDate);
		console.log(this.state.endDate);
	},
    onCampsiteSelect:function(u){
		this.setState({campsiteSelected:u});
    },
    onCampsiteClose:function(){
		this.setState({campsiteSelected: null});
	},
});		