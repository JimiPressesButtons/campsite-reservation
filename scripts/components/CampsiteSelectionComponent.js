var React= require('react');
var Backbone = require('backbone');
var _ = require('backbone/node_modules/underscore');
// var DateRangePicker = require('../../node_modules/react-daterange-picker');
var moment = require('../../node_modules/moment/min/moment.min.js');
var CampsiteModel = require('../models/CampsiteModel.js');
var ParkModel = require('../models/ParkModel.js');
var StatusBarComponent = require('./StatusBarComponent.js');
var CampsiteDetailsComponent = require('./CampsiteDetailsComponent.js');

var startDate = null;
var endDate = null;

module.exports = React.createClass({
	getInitialState: function(){
		return{
			value: null,
			campsites:[],
			campsiteSelected:null
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
					<div onClick={boundItemClick} className="listItem" >{campsite}</div> 
				);
			}
		);
		return(
			<div className='container'>
				<div className='row'>
					<StatusBarComponent status='campSelect'/>
					<div id='selectList' className ='four columns'>
						<ul> {campsites} </ul>
					</div>
					<div ref='calendar'id='calendar'className ='seven columns'>
						<form id='dates' onSubmit={this.saveDate}>
							<input type='date' ref='startDateTemp' />
							<input type='date' ref='endDateTemp' />
							<button>Save the date</button>
						</form>
					</div>
					{this.state.campsiteSelected ? <CampsiteDetailsComponent 
						router = {this.props.router} 
						parkId={this.props.parkId}
						campsiteType={this.state.campsiteSelected} 
						onClose={this.onCampsiteClose}
						startDate = {startDate}
						endDate = {endDate}
						/> : null}
				</div>
			</div>
		);
	},
	// handleSelect:function(range, states) {
	// 	// range is a moment-range object
	// 	this.setState({
	// 		value: range,
	// 		states: states,
	// 	});
	// },
	saveDate: function(e){
		e.preventDefault();
		startDate = this.refs.startDateTemp.value;
		endDate = this.refs.endDateTemp.value;
	},	
    onCampsiteSelect:function(u){
		this.setState({campsiteSelected:u});
    },
    onCampsiteClose:function(){
		this.setState({campsiteSelected: null});
	},
});		
//						<DateRangePicker
							// firstOfWeek={1}
							// numberOfCalendars={1}
							// selectionType='range'
							// minimumDate={new Date()}
							// stateDefinitions={stateDefinitions}
							// dateStates={dateRanges}
							// defaultState="available"
							// showLegend={true}
							// value={this.state.value}
							// onSelect={this.handleSelect} />