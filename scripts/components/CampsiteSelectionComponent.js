var React= require('react');
var Backbone = require('backbone');
var Calendar = require('../../node_modules/react-calendar-pane');
var moment = require('../../node_modules/moment/min/moment.min.js');
var CampsiteModel = require('../models/CampsiteModel.js');
var ParkModel = require('../models/ParkModel.js');
var StatusBarComponent = require('./StatusBarComponent.js');


module.exports = React.createClass({
	getInitialState: function(){
		return{
			campsites:[],
			events: null
		};
	},
	componentWillMount: function(){
		var campsitesQuery = new Parse.Query(CampsiteModel);
		var targetParkModel = new ParkModel({objectId: this.props.parkId});
		console.log(targetParkModel.id);
		campsitesQuery.equalTo('parkId', targetParkModel.id).find().then(
			(campsite)=>{
				this.setState({campsites: campsite});
				console.log(campsite);
			},
			(err) => {
            	console.log(err);
        	}
		);
		console.log(this.state.campsites);
	},
	render: function(){
		return(
			<div className='container'>
				<div className='row'>
					<StatusBarComponent status='campSelect'/>
					<div id='selectList' className ='four columns'>
						
					</div>
					<div ref='calendar'id='calendar'className ='seven columns'>
						<Calendar onSelect={this.onSelect}/>
					</div>
					
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
    }
});

		// {this.state.parkSelected ? <ParkDetailsComponent router = {this.props.router} parkId={this.state.parkSelected} onClose={this.onParkClose}/> : null}