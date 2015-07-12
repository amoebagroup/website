'use strict'; 
var express = require('express');

var app = express();

var port = process.env.PORT || 8080;
var http = require('http').Server(app);

app.use(express.static('public'));

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

http.listen(port, function(){
  console.log('Express server listening on port ' + port);
});