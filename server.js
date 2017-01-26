"use strict";

/**
 * server.js
 * This file defines the server for a
 * simple photo gallery web app.
 */
 var http = require('http');
 var fs = require('fs');
 var port = 3000;
 
 var chess = fs.readFileSync('images/chess.jpg');
 var fern = fs.readFileSync('images/fern.jpg');
 
 function serveImage(filename, req, res) {
	fs.readFile('images/' + filename, function(err, body){
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
 
 
 var server = http.createServer(function(req, res) {
	 
 switch(req.url){
	 case "/chess":
		 serveImage('chess.jpg', req, res)
		 break;
	 case "/fern":
	 case "/fern/":
	 case "/fern.jpg":
	 case "/fern.jpeg":
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
		 resstatusMessage = "Not found";
		 res.end();
	}

 });