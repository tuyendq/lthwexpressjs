var express = require('express');
var router = express.Router();


// Route /speakers
router.get('/speakers', function(req, res){
    var info = '';
    var dataFile = req.app.get('appData');
    dataFile.speakers.forEach(element => {
        info += `
        <li>
            <h2>${element.name}</h2>
    <img src="/images/speakers/${element.shortname}_tn.jpg" alt="speaker">
    <p>${element.summary}</p>
        </li>
        `;
    });
    res.send(`
    <link rel="stylesheet" type="text/css" href="/css/style.css">
    <h1>Roux Academy Meetups</h1>
    ${info}
    <script src="/reload/reload.js"></script>

    `);
});

// Route /speakers/speakerid
router.get('/speakers/:speakerid', function(req, res){
    var dataFile = req.app.get('appData');
    var speaker = dataFile.speakers[req.params.speakerid];
    res.send(`
    <link rel="stylesheet" type="text/css" href="/css/style.css">

    <h1>${speaker.title}</h1>
    <h2>with ${speaker.name}</h2>
    <img src="/images/speakers/${speaker.shortname}_tn.jpg" alt="speaker">
    <p>${speaker.summary}</p>
    <script src="/reload/reload.js"></script>

    `);
});

module.exports = router;