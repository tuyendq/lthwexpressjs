// Import express
var express = require('express');
// Create an instance of express function
var app = express();

app.get('/', function(req, res){
    res.send('<h1>Roux Academy Meetups</h1>');
});

var server = app.listen(3000, function(){
    console.log('Listening on port 3000');
});

