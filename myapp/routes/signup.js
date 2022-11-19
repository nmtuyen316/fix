var express = require('express');
var router = express.Router();
// var database = require('../db/db');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('signup', { session:req.session });
});



module.exports = router;