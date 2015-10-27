var React= require('react');
var Backbone = require('backbone');
var ParkModel = require('../models/ParkModel.js');
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
					<div id='map'className ='eight columns'></div>
					{this.state.parkSelected ? <ParkDetailsComponent parkId={this.state.parkSelected}/> : null}
				</div>
			</div>
		);
	},
	onParkSelect: function(u){
		this.setState({parkSelected: u});
	}
});