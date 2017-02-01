 "use strict";

/**
 * server.js
 * This file defines the server for a
 * simple photo gallery web app.
 */
 
 var http = require('http');
 var fs = require('fs');
 var port = 3100;
 
 var stylesheet = fs.readFileSync('gallery.css');
 var imageNames = ['ace.jpg', 'bubble.jpg', 'chess.jpg', 'fern.jpg', 'mobile.jpg'];
 
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
 
 var fern = fs.readFileSync('images/fern.jpg');
 var chess = fs.readFileSync('images/chess.jpg');
 var mobile = fs.readFileSync('images/mobile.jpg');
 var ace = fs.readFileSync('images/ace.jpg');
 var bubble = fs.readFileSync('images/bubble.jpg');
 
 var server = http.createServer(function(req, res) {
	switch(req.url){
	 case '/gallery':
	 var gHtml = imageNames.map(function(fileName){
		 return '<img src="'+ fileName +'" alt="a fishing ace at work">'
	 }).join('');
		var html = '<!doctype html>'
			html += '<head>'
			html += '  <title>Gallery</title>';
			html += '  <link href="gallery.css" rel="stylesheet" type="text/css">'
			html += '</head>';
			html += '<body>';
			html += '  <h1>Gallery</h1>';
			html += gHtml;
			html += '  <h1>Hello</h1> Time is ' + Date.now();
			html += '</body>';
		res.setHeader('Content-Type', 'text/html');
		res.end(html);
		break;
	 case '/chess.jpg':
	 case '/chess.jpeg':
	 case '/chess':
		res.end(chess);
		//serveImage('chess.jpg', req, res)
		 break;
	 case '/fern.jpg':
	 case '/fern.jpeg':
	 case '/fern':
		 //serveImage('fern.jpg', req, res)
		 res.end(fern);
		 break;
	 case '/mobile.jpg':
	 case '/mobile.jpeg':
	 case '/mobile':
		 //serveImage('mobile.jpg', req, res)
		 res.end(mobile);
		 break;
	 case 'images/ace.jpg':
	 case '/ace.jpg':
	 case '/ace.jpeg':
	 case '/ace':
		 //serveImage('ace.jpg', req, res)
		 res.end(ace);
		 break;
	 case '/bubble.jpg':
	 case '/bubble.jpeg':
	 case '/bubble':
		 //serveImage('bubble.jpg', req, res)
		 res.end(bubble);
		 break;
	 case '/gallery.css':
		res.setHeader('Content-Type', 'text/css');
		res.end(stylesheet);
		break;
	 default:
		 res.statusCode = 404;
		 res.statusMessage = "Not found";
		 res.end();
	}
 });
 
 
  

  server.listen(port, function(){
	console.log("Server is listening on port " + port);
 });