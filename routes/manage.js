var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('./ja/manage', {
    title: '管理画面',
  })
});

module.exports = router;
