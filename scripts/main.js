'use strict';
var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');
var NavComponent = require('./components/NavComponent');

var Router = new Backbone.Router.extend({


});

var r = new Router();
Backbone.history.start();

ReactDom.render(
	<NavComponent />, document.getElementById('nav')
);
