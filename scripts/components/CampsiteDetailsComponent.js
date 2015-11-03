var React= require('react');
var Backbone = require('backbone');

module.exports= React.createClass({

	render:function(){
		return(
			<div id= 'campsiteDetail'className ='seven columns'> 
				<img className='closeIcon' onClick={this.closePark} src='../../images/ic_highlight_off_18pt_2x.png' />
				<h3>{this.props.campsiteType}</h3>
				<button onClick={this.selectCampsite}>Select</button>

			</div>
		);
	},
	selectCampite: function(){
		console.log('in selectCampsite');
		// this.props.router.navigate('#campsite/'+this.state.parkId, {trigger: true});
	},
	closePark:function(){
		console.log('in closePark');
		this.props.onClose();
	}
});