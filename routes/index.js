var express = require('express');
var router = express.Router();
var swapi = require('swapi-node');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
