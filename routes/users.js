var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('https://api.rainforestapi.com/request?api_key=D61FE08660944E79A9CBA84302760037&type=search&amazon_domain=amazon.com&search_term=monbile', function(req, res) {
  res.json("Hai there")
});

module.exports = router;
