 "use strict";

/**
 * server.js
 * This file defines the server for a
 * simple photo gallery web app.
 */
 var http = require('http');
 var fs = require('fs');
 var port = 3100;
 
 var server = http.createServer(function(req, res) {
	switch(req.url){
	 case "/chess":
		 serveImage('chess.jpg', req, res)
		 break;
	 case "/fern":
		 serveImage('fern.jpg', req, res)
		 break;
	 case "/mobile":
		 serveImage('mobile.jpg', req, res)
		 break;
	 case "/ace":
		 serveImage('ace.jpg', req, res)
		 break;
	 case "/bubble":
		 serveImage('bubble.jpg', req, res)
		 break;
	 default:
		 res.statusCode = 404;
		 res.statusMessage = "Not found";
		 res.end();
	}
 });
 
 
 
 function serveImage(filename, req, res) {
	var data = fs.readFile('images/' + filename, function(err, body){
		if(err) {
			console.error(err);
			res.statusCode = 500;
			res.statusMessage = "whoops";
			res.end("Silly me");
			return;
		}
	res.setHeader("Content-Type", "image/jpeg");
	res.end(body); 
	});
 }
 
 

  server.listen(port, function(){
	console.log("Server is listening on port " + port);
 });