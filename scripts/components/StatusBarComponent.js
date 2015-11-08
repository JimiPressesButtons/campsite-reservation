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

		}else if(this.props.status==='confirmSelection'){
			
		}else if(this.props.status==='checkout'){
			
		}
	},
	componentDidMount:function() {
	     
	},
	render:function(){
		return(
			<ul id='statusBar'className='eleven columns breadcumb'>
				<li className='statusTag'>Select Park</li>
				<li className='statusTag'>Choose Campsite</li>
				<li className='statusTag'>Confirmation</li>
				<li className='statusTag'>Checkout</li>
			</ul>
		);
	}

});
<div class="css-shapes-preview"></div>