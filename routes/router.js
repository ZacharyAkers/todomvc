
const express = require('express');
const router  = express.Router();

router.get('/', function(req, res) {
  res.redirect('/api');
});

router.get('/api', function(req, res) {
  res.send("HEEELLLLLLLLooooooo");
});

module.exports = router;