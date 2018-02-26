var express = require('express');
var connect = require('../utils/sqlConnect'); // so that we can run queries
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //we're not using this yet
});

router.get('/:id', function(req, res, next) {
  connect.query(`SELECT * FROM mainmodel WHERE model="${req.params.id}"`, (err, result) => {
    if (err) {
      throw err;
    } else {
      console.log(result);

      res.json(result); // this is just like echoing json with PHP
    }
  });
});

router.delete('/:id', (req, res) => {
  console.log('hit the delete route!');
  connect.query(`DELETE FROM mainmodel WHERE model="${req.params.id}"`, (err, result) => {
    if (err) {
      throw err;
    } else {
      console.log(res);
      res.json(res); //send back whatever the result is (probably be an SQL message)
    }
  });
});

module.exports = router;
