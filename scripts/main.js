'use strict';
var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');

var NavComponent = require('./components/NavComponent.js');
var ReserveHomeComponent = require('./components/ReserveHomeComponent.js');
var main = document.getElementById('main');

var Router = Backbone.Router.extend({
	routes:{
		'':'home'
	},
	home: function(){
		ReactDOM.render(<ReserveHomeComponent />, main);
	}
});

var r = new Router();
Backbone.history.start();

ReactDOM.render(
	<NavComponent />, document.getElementById('nav')
);
