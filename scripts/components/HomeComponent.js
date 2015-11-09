var React= require('react');
var Backbone = require('backbone');
window.$ = require('jquery');
window.jQuery = $;

module.exports = React.createClass({
	componentDidMount: function(){
        $(document).ready(function(){
            $('.parallax').parallax();
            $('.modal-trigger').leanModal();
        });
					// <div id='heroHeader'>
					// 	<h1 className="center brand-title"></h1>
					// </div>
    },
	render:function(){
		return(
			<div id= 'homepage'> 
				<div id="index-banner">
					<div id='heroImage' >
                        <div id='davis' > 
    						<div className="container">
                                <br /><br />
                                <h1 className="header center brand-title heroTitle">Campsite Reservation</h1>
                                <div className="row center">
                                    <a href="#park" id="signupButton" className="btn-large waves-effect heroButton">Explore</a>
                                </div>
                            </div>
    					 </div>
                     </div>
				</div>

				<div className="container">
                    <div className="section">
                        <div className="row">
                            <div className="col s12 m4">
                                <div className="icon-block box-shadow--6dp">
                                    <h3 className="center icon-color"><i className="material-icons">supervisor_account</i></h3>
                                    <h5 className="center">Find a Park</h5>

                                    <p className="light">Search through Texas's State Parks by either the avaliable activities or type of campsites avaliable.</p>
                                </div>
                            </div>

                            <div className="col s12 m4">
                                <div className="icon-block box-shadow--6dp">
                                    <h3 className="center icon-color"><i className="material-icons">today</i></h3>
                                    <h5 className="center">Book a campsite</h5>
                                    <p className="light">Easily book a campsite for any state park. Ensure your spot at one of Texas's many wonders. </p>
                                </div>
                            </div>

                            <div className="col s12 m4">
                                <div className="icon-block box-shadow--6dp">
                                    <h3 className="center icon-color"><i className="material-icons">view_list</i></h3>
                                    <h5 className="center">Manage Reservations</h5>

                                    <p className="light">We make sure it is easy to change your reservations so you can get back into nature.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="index-banner" className='parallax-container'>
					<div id='enchanted'>  </div>
				</div>
				<div id="index-banner" >
                    <div className="container">
                        <div className="box-shadow--6dp col m8 offset-m2 reserveHeader" >
                            <h4 className="header center brand-title">Reservation Procedures</h4>
                            <div className='reserveText'>
                            <p>We recommend reservations for day and overnight facilities and some tours and activities. Popular sites book up months in advance; reserve those sites early.With one call, you can make reservations 11 months (333 days) in advance for multiple sites and parks (with no overlapping dates).</p>
                            <p>Make reservations at least one day prior to your arrival date. You can make reservations on the Web until 5 a.m. on the day of arrival. After that time, for arrival that day, call the park directly. If sites are available, make a reservation with a credit card (Discover, MasterCard, or Visa). We will charge your credit card for the first night's stay. Reservations made the day of arrival at the park are not refundable.</p>
                            </div>
                        </div>
                    </div>
					<div id='bracken'>  </div>
				</div>
			</div>
		);
	}


});