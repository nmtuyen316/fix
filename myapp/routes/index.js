var express = require('express');
var router = express.Router();
//database
// const dbconfig = require('../db/dbConfig');
// const connection = require('../db/connection');
// const query = require('../db/query');
//action

/* GET home page. */
router.get('/', async function(req, res, next) {
  // const conn = await connection(dbconfig).catch(e => {}) 
  // const results = await query(conn, 'SELECT name FROM Product where productID=1').catch(console.log); 
  // if(!results.name) console.log(results);
  res.render('index', { title: 'EagleTealRepair - Sửa chữa & cài đặt phần mềm máy tính', session:req.session });
});

module.exports = router;
