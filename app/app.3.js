// Import express
var express = require('express');
// Create an instance of express function
var app = express();
var dataFile = require('./data/data.json');

app.set('port', process.env.PORT || 3000);

app.get('/', function(req, res){
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

var server = app.listen(app.get('port'), function(){
    console.log('Listening on port ' + app.get('port'));
});

