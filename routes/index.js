var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/https://www.amazon.in/', function(req, res) {
    console.log(req);
});

module.exports = router;
