// Import express
var express = require('express');
var reload = require('reload');
// Create an instance of express function
var app = express();

var dataFile = require('./data/data.json');

app.set('port', process.env.PORT || 3000);
app.set('appData', dataFile);
app.set('view engine', 'ejs');
app.set('views', 'app/views');

// Global variables
app.locals.siteTitle = "Roux Meetups";

// Grant public access to app/public
app.use(express.static('app/public'));

// Import route /
app.use(require('./routes/index'));
// Import route /speakers and /speakers/speakerid
app.use(require('./routes/speakers'))


var server = app.listen(app.get('port'), function(){
    console.log('Listening on port ' + app.get('port'));
});

reload(server, app);
