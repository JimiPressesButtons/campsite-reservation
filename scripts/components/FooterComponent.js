var React= require('react');
var Backbone = require('backbone');

module.exports=React.createClass({
	render:function(){
	return(
		<div id='footerBox' className='container'>
		<div className='row'>
		<div className="col m2">
			<ul>
				<li className="header">About TPWD</li>
				<li><a href="/about">General Information</a></li>
				<li><a href="/about">Office Locations</a></li>
				<li className="mobile"><a href="/site/compact/">Compact with Texans</a></li>
				<li><a href="/about/tpw-commissioners">TPW Commission</a></li>
				<li><a href="/jobs/">Jobs &amp; Careers</a></li>
                <li><a href="/volunteer">Volunteer Opportunities</a></li>
				<li><a href="/faq/">FAQs</a></li>
			</ul>
		</div>
		<div className="col m2">
					<ul>
						<li className="header">Doing Business with TPWD</li>
						<li><a href="/publications/pwdforms/">Agency Forms</a></li>
						<li><a href="/business/permits/">Permits</a></li>
						<li><a href="/business/grants/">Grants &amp; Assistance</a></li>
						<li><a href="/business/bidops/current_bid_opportunities/">Bids &amp; Vendor Opportunities</a></li>
						<li><a href="/business/surplus/">Surplus Property</a></li>
                        <li><a href="/business/bidops/contracts/">Transparency Contract Reports</a></li>
					</ul>
				</div>
			
				<div className="col m2">
					<ul>
						<li className="header">Resources</li>
						<li><a href="/publications/">Publications</a></li>
						<li className="mobile"><a href="/site/policies/privacy-and-security-policies">Privacy &amp; Security</a></li>
						<li className="mobile"><a href="/site/accessibility/">Accessibility Policy</a></li>
						<li className="mobile"><a href="/site/policies/linking-policy">Linking Policy</a></li>
						<li><a href="/site/policies/">Site Policies</a></li>
						<li><a href="https://wildnet.tpwd.state.tx.us/">Intranet</a></li>
					</ul>
				</div>
				
				<div className="col m2">
					<ul>
						<li className="header">Statewide Info</li>
						<li><a href="http://www.texas.gov/">texas.gov</a></li>
						<li className="mobile"><a href="http://www.governor.state.tx.us/homeland">Homeland Security</a></li>
						<li className="mobile"><a href="http://www2.tsl.state.tx.us/trail/">TRAIL Archives</a></li>
                        <li className="mobile"><a href="http://www.texastransparency.org/">Texas Transparency</a></li>
						<li className="mobile"><a href="http://www.traveltex.com/">Texas Tourism</a></li>
						<li className="mobile"><a href="http://www.texas.gov/veterans">Texas Veterans Portal</a></li>
					</ul>
				</div>
				
				<div className="col m2">
                	<ul>
						<li className="header">Connect with TPWD</li>
						<li><a href="/socialmedia/">Social Media</a></li>
						<li className="mobile"><a href="/business/feedback/webcomment/">Submit a Question</a></li>
						<li className="mobile"><a href="/site/openrecords">Open Records</a></li>
						<li><a href="/business/feedback/complaints/">Complaint Process</a></li>
						<li className="mobile"><a href="/site/fraud/">Report Fraud</a></li>
					</ul>
				</div>
                <div className="col m2">
                    <ul>
                        <li><a href="https://service.govdelivery.com/service/multi_subscribe.html?code=TXPWD&amp;origin=http://www.tpwd.state.tx.us/"><i className="icon-email icon-large"></i>Sign up for Email</a></li>
                        <li><a href="http://www.facebook.com/texasparksandwildlife"><i className="icon-facebook icon-large"></i>Facebook</a></li>
                        <li><a href="http://twitter.com/TPWDnews"><i className="icon-twitter icon-large"></i>Twitter</a></li>
                        <li><a href="http://www.youtube.com/user/texasparkswildlife">
						<i className="icon-youtube icon-large"></i>YouTube</a></li>
                    </ul>
                </div>
            </div>
	</div>
	);
	}
});