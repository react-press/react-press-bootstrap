var express = require('express');
var router = express.Router();
require('dotenv').config()

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json({
    wpAccessToken: process.env.SECRET_KEY,
    wpUrl: process.env.URL
  })
});

module.exports = router;
