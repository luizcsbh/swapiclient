var express = require('express');
var request = require('request');
var crypto = require('crypto');
var swapi = require('swapi-node');


router.get('/', function(req, res, next){
    res.render('index');   

});




module.exports = router;