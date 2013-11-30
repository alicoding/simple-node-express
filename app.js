var express = require('express'),
    path = require('path'),
    nunjucks = require('nunjucks');


var app = express(),
    nunjucksEnv = new nunjucks.Environment( new nunjucks.FileSystemLoader( path.join( __dirname, 'views' )), {
      autoescape: true
    });

nunjucksEnv.express( app );

app.use( express.logger());

app.get( "/", function( req, res ) {
  res.render( "index.html" );
});

app.listen(8000, function() {
  console.log("Server listening - http://localhost:8000");
});
