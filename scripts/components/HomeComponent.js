var React= require('react');
var Backbone = require('backbone');

module.exports = React.createClass({
	componentWillMount: function(){
        $(document).ready(function(){
            $('.parallax').parallax();
        });
					// <div id='heroHeader'>
					// 	<h1 className="center brand-title"></h1>
					// </div>
    },
	render:function(){
		return(
			<div id= 'homepage'> 
				<div id="index-banner" >
					<div id='heroImage'><div id='davis'> 
						<div className="container">
                            <br /><br />
                            <h1 className="header center brand-title">Campsite Reservation</h1>
                            <div className="row center">
                                <a href="#park" id="searchParkButton" className="btn-large waves-effect">Search</a>
                                
                            </div>
                        </div>
					 </div></div>
				</div>
				<div className="container">
                    <div className="section">
                        <div className="row">
                            <div className="col s12 m4">
                                <div className="icon-block box-shadow--6dp">
                                    <h3 className="center icon-color"><i className="material-icons">supervisor_account</i></h3>
                                    <h5 className="center">Stay Together</h5>

                                    <p className="light">Kin-Connect is making it easier than ever to stay in touch with your family members!</p>
                                </div>
                            </div>

                            <div className="col s12 m4">
                                <div className="icon-block box-shadow--6dp">
                                    <h3 className="center icon-color"><i className="material-icons">today</i></h3>
                                    <h5 className="center">Stay Up to Date</h5>
                                    <p className="light">Kin-Connect allows your family to keep up with all of the upcoming family events! </p>
                                </div>
                            </div>

                            <div className="col s12 m4">
                                <div className="icon-block box-shadow--6dp">
                                    <h3 className="center icon-color"><i className="material-icons">view_list</i></h3>
                                    <h5 className="center">Stay Talking</h5>

                                    <p className="light">Kin-Connect lets you enter recipes into a family-wide cookbook, no longer with you be asking how to make grandma's apple's pie!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="index-banner" >
						<div className="container">
							<h1 className="header center brand-title">Campsite Reservation</h1>
						</div>
					<div id='enchanted'>  </div>
				</div>
				<div id="index-banner" >
						<div className="container">
							<h1 className="header center brand-title">Campsite Reservation</h1>
						</div>
					<div id='bracken'>  </div>
				</div>
			</div>
		);
	}


});