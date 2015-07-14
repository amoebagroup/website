var express = require('express'),
	router 	= express.Router();

router.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

module.exports = router;