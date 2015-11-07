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
					<div onClick={boundItemClick} className="listItem" >{campsite}</div> 
				);
			}
		);
		return(
			<div className='container'>
				<div className='row'>
					<StatusBarComponent status='campSelect'/>
					<div id='selectList' className ='col m4'>
						<ul> {campsites} </ul>
					</div>
					<div ref='calendar'id='calendar'className ='col m7'>
						<form id='dates' onSubmit={this.saveDate}>
							<input type='date' ref='startDate' />
							<input type='date' ref='endDate' />
							<button>Save the date</button>
						</form>
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