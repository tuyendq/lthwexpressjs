// Import express
var express = require('express');
// Create an instance of express function
var app = express();
var dataFile = require('./data/data.json');

app.set('port', process.env.PORT || 3000);

// Route /
app.get('/', function(req, res){
    res.send(`
    <h1>Welcome</h1>
    <p>Roux Academy Meetups put together artists from all walks of life.</p>
    `);
});

// Route /speakers
app.get('/speakers', function(req, res){
    var info = '';
    dataFile.speakers.forEach(element => {
        info += `
        <li>
            <h2>${element.name}</h2>
            <p>${element.summary}</p>
        </li>
        `;
    });
    res.send(`
    <h1>Roux Academy Meetups</h1>
    ${info}
    `);
});

// Route /speakers
app.get('/speakers/:speakerid', function(req, res){
    var speaker = dataFile.speakers[req.params.speakerid];
    res.send(`
    <h1>${speaker.title}</h1>
    <h2>with ${speaker.name}</h2>
    <p>${speaker.summary}</p>
    `);
});

var server = app.listen(app.get('port'), function(){
    console.log('Listening on port ' + app.get('port'));
});

