var express = require('express'),
    path = require('path'),
    nunjucks = require('nunjucks'),
    uslug = require('uslug');


var app = express(),
    nunjucksEnv = new nunjucks.Environment( new nunjucks.FileSystemLoader( path.join( __dirname, 'views' )), {
      autoescape: true
    });

nunjucksEnv.express( app );

app.use( express.logger());

app.get( "/", function( req, res ) {
	var someInput = "This is the title that will be process by uslug";
  res.render( "index.html", {
  	output: uslug(someInput)
  });
});

app.listen(8000, function() {
  console.log("Server listening - http://localhost:8000");
});
