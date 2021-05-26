var express = require('express');
var path = require('path');
var mysql = require('mysql');
var router = express.Router();

var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '123456',
    database : 'o2'
});

var sql = 'SELECT * FROM topic';
connection.query(sql, function (err, rows, fields) {
  if (err) console.log(err);
  console.log('rows', rows); //row는 배열이다.
  console.log('fields', fields); //fields는 컬럼을 의미한다.
});


router.get('/topic', function(req, res, next) {
  res.render('view');
});

router.get('/topic/add', function(req, res, next) {
  res.render('add');
});

router.get('/topic/edit', function(req, res, next) {
  res.render('edit');
});

router.get('/topic/delete', function(req, res, next) {
  res.render('delete');
});

module.exports = router;