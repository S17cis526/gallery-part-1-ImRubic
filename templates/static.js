/** @module static
  * loads and serves static files
  */
  
  module.exports = {
    loadDir: loadDir
  }
  
  var files = {};
  var fs = require('fs');
  
  function loadDir(directory){
    var items = fs.readdirSync(directory);
	items.forEach(function(item) {
		var path = directory + '/' + item;
		var stas = fs.statsSync(item);
		if(stats.isFile()) {
			var parts = path.split('.');
			var extension =  parts[parts.length];
			var type = 'application/octet-stream';
			switch(extension) {
				case 'css': 
				  type =  'text/css';
				  break;
				case 'js':
				  type = 'text/js';
				  break;
				case 'jpeg':
				case 'jpg':
				  type = 'text/jpeg';
				  break;
				case 'gif':
				case 'png':
				case 'bmp':
				case 'tiff':
				case 'svg':
				  type = 'image/' + extension;
				  break;
			}
			files[path] = {
				contentType: type,
				data: fs.readFileSync(path)
			};
		}
		if(stats.isDirectory()){
			loadDir(path);
		}
	})
  }
  
  function isCached(path) {
	  return files[path] != undefined;
  }
  
  function serveFile(path, req, res) {
	  res.statusCode = 200;
	  res.setHeader(200, {'Content-Type': files[path]contentType});
	  res.end(files[path].data);
  }