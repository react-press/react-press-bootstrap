var express = require('express');
var router = express.Router();
require('dotenv').config()

/* GET POSTS. */
router.get('https://admin.react-press.net/wp-json/v2/posts', function(req, res, next) {
  res.header({
    'Content-Type': 'application.json',
    'Authorization': process.env.SECRET_KEY
  })
  .then(res => console.log(res)
  .then(
    
  )
  );
})



module.exports = router;
