var express = require('express');
var router = express.Router();
var musicRoute = require('../routes/musicRoute')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.use('/music', musicRoute)

module.exports = router;
