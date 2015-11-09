'use strict';
var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');
window.$ = require('jquery');
window.jQuery = $;
$(document).ready(function(){
            $('.parallax').parallax();
            $('.modal-trigger').leanModal();
        });

Parse.initialize("9sd2q0JxfBh6eWh1PVgYsW2wrFndlmUlT7tYa35d", "Palf0mZkw2r2fS53EDabTT3TIPXAxid86PfP4nZb");

var NavComponent = require('./components/NavComponent.js');
var HomeComponent = require('./components/HomeComponent.js');
var ParkSelectionComponent = require('./components/ParkSelectionComponent.js');
var CampsiteSelectionComponent = require('./components/CampsiteSelectionComponent.js');
var ConfirmSelectionComponent = require('./components/ConfirmSelectionComponent.js');
var CheckoutComponent = require('./components/CheckoutComponent.js');
var ProfileComponent = require('./components/ProfileComponent.js');
var LoginComponent = require('./components/LoginComponent.js');
var SignupComponent = require('./components/SignupComponent.js');
var FooterComponent = require('./components/FooterComponent.js');
var main = document.getElementById('main');
var nav = document.getElementById('nav');
var footer = document.getElementById('footer');
var Router = Backbone.Router.extend({
	routes:{
		'':'home',
		'park':'park',
		'campsite/:id':'campsite',
		'confirmSelection/:id':'confirmSelection',
		'checkout/:id':'checkout',
		'profile':'profile',
		'login':'login',
		'signup':'signup'
	},
	home: function(){
		ReactDOM.render(<HomeComponent />, main);
	},
	park: function(){
		ReactDOM.render(<ParkSelectionComponent router={r}/>,main);
	},
	campsite: function(id){
		ReactDOM.render(<CampsiteSelectionComponent parkId={id} router={r}/>,main);
	},
	confirmSelection: function(id){
		ReactDOM.render(<ConfirmSelectionComponent reservationId={id} router={r}/>,main);
	},
	checkout: function(id){
		ReactDOM.render(<CheckoutComponent reservationId={id} router={r}/>,main);
	},
	profile: function(){
		ReactDOM.render(<ProfileComponent router={r}/>,main);
	},
	login:function(){
		ReactDOM.render(<LoginComponent router={r}/>,main);
	},
	signup:function(){
		ReactDOM.render(<SignupComponent router={r}/>,main);
	}
});

var r = new Router();
Backbone.history.start();

ReactDOM.render(<NavComponent router={r}/>, nav);
ReactDOM.render(<FooterComponent router={r}/>, footer);
