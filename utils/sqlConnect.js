var mysql = require('mysql'); //it's like doing a require with php
var config = require('../config');

var connect = mysql.createConnection({
  host : config.host,
  port: config.port,
  user : config.user,
  password : config.password,
  database : config.database
});

module.exports = connect;
