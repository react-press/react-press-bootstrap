var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'NO ACCESS!', condition: true, anyArray: [1,2,3] })
  res.json([
    {id: 1, username: "andrew &" },
    {id: 2, username: 'von'}
  ])
});

module.exports = router;
