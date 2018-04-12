var express = require('express');
var router = express.Router();

var User = {
  username: 'admin',
  password: 'admin',
  email: 'a@a.com'
};


/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

module.exports = router;
