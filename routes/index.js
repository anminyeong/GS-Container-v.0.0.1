var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('main/index');
});

router.get('/introduce', function(req, res, next) {
  res.render('main/introduce');
});

router.get('/product-detail', function(req, res, next) {
  res.render('main/product-detail.ejs');
});

module.exports = router;
