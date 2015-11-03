var React= require('react');
var Backbone = require('backbone');
var _ = require('backbone/node_modules/underscore');
var Calendar = require('../../node_modules/react-calendar-pane');
var moment = require('../../node_modules/moment/min/moment.min.js');
var CampsiteModel = require('../models/CampsiteModel.js');
var ParkModel = require('../models/ParkModel.js');
var StatusBarComponent = require('./StatusBarComponent.js');
var CampsiteDetailsComponent = require('./CampsiteDetailsComponent.js');


module.exports = React.createClass({
	getInitialState: function(){
		return{
			campsites:[],
			campsiteSelected:null,
			events: null
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
		// console.log(this.state.campsiteSelected);
		var campsites = this.state.campsites.map(
			(campsite)=>{
				let boundItemClick = this.onCampsiteSelect.bind(this, campsite.id);
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
						<Calendar onSelect={this.onSelect}/>
					</div>
					{this.state.campsiteSelected ? <CampsiteDetailsComponent router = {this.props.router} campsiteType={this.state.campsiteSelected} onClose={this.onCampsiteClose}/> : null}
				</div>
			</div>
		);
	},
	onSelect: function (date) {
        if (moment().isSame(date, 'year')) {
            this.eventQuery(date);
        } else {
            return false;
        }
    },
    eventQuery: function(date){
        let currentDate = moment(date._d).format('MMMM Do YYYY');
        let eventQuery = new Parse.Query('Event');
        eventQuery.equalTo('dateOfEvent', currentDate);
        eventQuery.find().then(
            (events) => {
                this.setState({events: events})
            },
            (err) => {
                console.log(err)
            }
        )
    },
    onCampsiteSelect:function(u){
    	console.log(u);
    	this.setState({campsiteSelected:u});

    },
    onCampsiteClose:function(){
		this.setState({campsiteSelected: null});
	},
});

		// {this.state.parkSelected ? <ParkDetailsComponent router = {this.props.router} parkId={this.state.parkSelected} onClose={this.onParkClose}/> : null}