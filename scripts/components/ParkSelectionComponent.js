var React= require('react');
var Backbone = require('backbone');
var ParkModel = require('../models/ParkModel.js');
var CampsiteModel = require('../models/CampsiteModel.js');
var ParkDetailsComponent =require('./ParkDetailsComponent.js');

module.exports = React.createClass({
	getInitialState: function(){
		return{
			parkList: [],
			parkSelected: null
		};
	},
	componentWillMount: function(){
		var parkQuery = new Parse.Query(ParkModel);
		parkQuery.find().then(
			(park) =>{
				this.setState({parkList:park});
			},
			(err) =>{
				console.log(err);
			}
		);
	},
	componentDidMount: function(){
		var texas = {lat:31.000, lng: -99.500}
		this.map = new google.maps.Map(this.refs.map, {
			center: texas,
			zoom: 6,
			zoomControl: true,
    		mapTypeId: google.maps.MapTypeId.TERRAIN
		});
		// var marker = new google.maps.Marker({
		//     position: (-25.363882,131.044922),
		//     title:"Hello World!"
		// });
	},
	render: function(){
		var parks = this.state.parkList.map(
			(park)=>{
				let boundItemClick = this.onParkSelect.bind(this, park.id);
				return(
					<div onClick={boundItemClick} className="listItem" key={park.id}>{park.get('name')}</div> 
				);
			}
		);

		return(
			<div className='container'>
				<div className='row'>
					<div id='selectList' className ='four columns'>
						<ul> {parks} </ul>
					</div>
					<div ref='map'id='map'className ='eight columns'>


					</div>
					{this.state.parkSelected ? <ParkDetailsComponent router = {this.props.router} parkId={this.state.parkSelected} onClose={this.onParkClose}/> : null}
					<div ref='filter' id='filter' className = 'eight columns'>
						<h3>Filter</h3>
						<form onSubmit={this.onFilter}>
							<select ref='activity' id='activityList' className='three columns' placeholder='By Activity'>
								<option ref='beachOceanSwimming' value='Beach/Ocean Swimming' key='1'>Beach / Ocean Swimming</option>
								<option ref='biking' value='Biking' key='2'>Biking</option>
								<option ref='birding' value='Birding' key='3'>Birding</option>
								<option ref='boating' value='Boating & Paddling' key='4'>Boating & Paddling</option>
								<option ref='camping' value='Camping' key='5'>Camping</option>
								<option ref='caving' value='Caving' key='6'>Caving</option>
								<option ref='equestrianDayUse' value='Equestrian Day Use' key='7'>Equestrian Day Use</option>
								<option ref='equestrianOvernightUse' value='Equestrian Overnight Use' key='8'>Equestrian Overnight Use</option>
								<option ref='fishing' value='Fishing' key='9'>Fishing</option>
								<option ref='geocaching' value='Geocaching' key='10'>Geocaching</option>
								<option ref='golfing' value='Golfing' key='11'>Golfing</option>
								<option ref='hiking' value='Hiking' key='12'>Hiking</option>
								<option ref='history' value='History' key='13'>History</option>
								<option ref='horseRentals' value='Horse Rentals' key='14'>Horse Rentals</option>
								<option ref='hunting' value='Hunting' key='15'>Hunting</option>
								<option ref='lakeRiverSwimming' value='Lake/River Swimming' key='16'>Lake/River Swimming</option>
								<option ref='offRoading' value='Off-Roading' key='17'>Off-Roading</option>
								<option ref='overnightLodging' value='Overnight Lodging (non-camping)' key='18'>Overnight Lodging (non-camping)</option>
								<option ref='photography' value='Photography' key='19'>Photography</option>
								<option ref='poolSwimming' value='Pool Swimming' key='20'>Pool Swimming</option>
								<option ref='rockClimbing' value='Rock Climbing' key='21'>Rock Climbing</option>
								<option ref='starGazing' value='Star Gazing' key='22'>Star Gazing</option>
								<option ref='wheelchairAccessibility' value='Wheelchair Accessibility' key='23'>Wheelchair Accessibility</option>
							</select>
							<div>
								<input ref='searchPark' placeholder='By Park Name' type='text' />
							</div>
							<select ref='campsite' id='campsiteList'>
								<option ref='tent' value='tent'>Tent</option>
								<option ref='wtr' value='wtr'>Water</option>
								<option ref='wtr,elec' value='wtr,elec'>Water, Electrical</option>
								<option ref='wtr,elec,sewer' value='wtr,elec,sewer'>Water, Electrical, Sewer</option>
								<option ref='wtr,elec50' value='wtr,elec50'>Water, Electrical 50amp</option>
								<option ref='wtr,elec50,sewer' value='wtr,elec50,sewer'>Water, Electrical 50amp, Sewer</option>
								<option ref='primitive' value='primitive'>Primitive</option>
								<option ref='primitive (hike in)' value='primitive (hike in)'>Primitive (must hike in)</option>
								<option ref='cabin' value='cabin'>Cabin</option>
								<option ref='yurt' value='yurt'>Yurt</option>
								<option ref='screenShelter' value='screenShelter'>Screened Shelter</option>
								<option ref='backCountry' value='backCountry'>Backcountry</option>
							</select>
							<button id='filterButton'> Submit</button> 
						</form>
					</div>
				</div>
			</div>
		);
	},
	onParkSelect: function(u){
		this.setState({parkSelected: u});
	},
	onParkClose:function(){
		this.setState({parkSelected: null});
	},
	onFilter: function(e){
		e.preventDefault();
		console.log(this.refs.activity.value);
		var activityQuery = new Parse.Query(ParkModel);
		var	campsiteQuery = new Parse.Query(CampsiteModel);
			
		activityQuery.equalTo('activities', this.refs.activity.value).find()
		.then(
			(parkObject)=>{
				this.setState({parkList:parkObject});
			}
			// campsiteQuery.equalTo('type',this.refs.campsite.value).find()
			// 	.then(
			// 		(parkObject)=>{
			// 			this.setState({parkList:parkObject});
			// 		}
			// 	);
		);
	}		
});