var express = require('express');
var router = express.Router();
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'EagleTealRepair - Sửa chữa & cài đặt phần mềm máy tính', session:req.session });
});

module.exports = router;
