'use strict';
var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');

Parse.initialize("9sd2q0JxfBh6eWh1PVgYsW2wrFndlmUlT7tYa35d", "Palf0mZkw2r2fS53EDabTT3TIPXAxid86PfP4nZb");

var NavComponent = require('./components/NavComponent.js');
var ReserveHomeComponent = require('./components/ReserveHomeComponent.js');
var ParkSelectionComponent = require('./components/ParkSelectionComponent.js');
var CampsiteSelectionComponent = require('./components/CampsiteSelectionComponent.js');
var main = document.getElementById('main');

var Router = Backbone.Router.extend({
	routes:{
		'':'home',
		'park':'park',
		'campsite/:id':'campsite'
	},
	home: function(){
		ReactDOM.render(<ReserveHomeComponent />, main);
	},
	park: function(){
		ReactDOM.render(<ParkSelectionComponent router={r}/>,main);
	},
	campsite: function(id){
		ReactDOM.render(<CampsiteSelectionComponent parkId={id}/>,main);
	}
});

var r = new Router();
Backbone.history.start();

ReactDOM.render(
	<NavComponent />, document.getElementById('nav')
);
