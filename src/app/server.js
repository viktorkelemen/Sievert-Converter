var express = require('express'),
	http = require("http");

var app = express.createServer();


app.configure('development', function() {

	console.log("Development mode");

	app.configure(function() {
		app.use(express.logger('\x1b[33m:method\x1b[0m \x1b[32m:url\x1b[0m :response-time'));
		app.use(app.router);
		app.use(express.static(__dirname + '/public'));
		app.use(express.errorHandler({
			dumpExceptions: true,
			showStack: true
		}));
		app.set('views', __dirname + '/views');
		app.set('view engine', 'ejs');
	});
});

app.configure('production', function() {

	console.log("Production mode");

	app.configure(function() {
	  app.use(express.logger('\x1b[33m:method\x1b[0m \x1b[32m:url\x1b[0m :response-time'));
	  app.use(app.router);
	  app.use(express.static(__dirname + '/public'));
	  app.use(express.errorHandler({
	    dumpExceptions: true,
	    showStack: true
	  }));
	  app.set('views', __dirname + '/views');
	  app.set('view engine', 'ejs');
	});
});




app.get('/', function(req, res){

    res.render('index');
});

app.listen(30000);