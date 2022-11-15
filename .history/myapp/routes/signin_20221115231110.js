var express = require('express');
var router = express.Router();
var database = require('../db/db');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('signin', { session:req.session });
});


module.exports = router;