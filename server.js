'use strict'; 
var express = require('express'),
	http 	= require('http'),
	routes 	= require('./routes'),
	app 	= express(),
	port 	= process.env.PORT || 8080,
	server 	= http.createServer(app),
	bodyParser = require('body-parser');

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', routes);

server.listen(port, function(){
  console.log('Express server listening on port ' + port);
});