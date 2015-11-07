var React= require('react');
var Backbone = require('backbone');

module.exports = React.createClass({
	componentDidMount: function(){
        $(document).ready(function(){
            $('.parallax').parallax();
        });
    },
	render:function(){
		return(
			<div id= 'homepage'> 
				<div id="index-banner" className="parallax-container">
					<div className="section no-pad-bot">
						<div className="container">
							<h1 className="header center brand-title">Campsite Reservation</h1>
						</div>
					</div>
					<div className="parallax"><img src="../../images/davis-mountains.jpg" /></div>
				</div>
			</div>
		);
	}


});