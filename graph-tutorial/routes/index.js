var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let params = {
    active: { 
      home: true,
      title: 'Node.js Graph Tutorial'
     }
  };
  // res.render('index', { title: 'Node.js Graph Tutorial' });
  res.render('index', params);
});

module.exports = router;
