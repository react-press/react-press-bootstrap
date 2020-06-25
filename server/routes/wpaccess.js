var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json({
    wpAccessToken: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9hZG1pbi5yZWFjdC1wcmVzcy5uZXQiLCJpYXQiOjE1OTMwOTgyMTksIm5iZiI6MTU5MzA5ODIxOSwiZXhwIjoxNTkzNzAzMDE5LCJkYXRhIjp7InVzZXIiOnsiaWQiOjF9fX0.yPCoXPQvXCkwqbHdlBBxuP13IS-k16SHx3ulAzeX7qs',
    wpUrl: 'https://admin.react-press.net/wp-json'
  })
});

module.exports = router;
