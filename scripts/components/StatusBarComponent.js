var React= require('react');
var Backbone = require('backbone');

module.exports = React.createClass({
	getInitialState: function(){
		return{
			status: null
		};
	},
	componentWillMount:function() {
		if(this.props.status==='parkSelect'){

		}else if(this.props.status==='campSelect'){

		}
	},
	componentDidMount:function() {
	     
	},
	render:function(){
		return(
			<div id='statusBar'className='eleven columns'>
				<div className='statusTag'>Select Park</div>
				<div className='statusTag'>Choose Campsite</div>
				<div className='statusTag'>Confirmation</div>
				<div className='statusTag'>Checkout</div>
			</div>
		);
	}

});