var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/:index', function(req, res, next) {
  let index = 0;
  if (req.params.index !== undefined) {
    index = req.params.index;
  }
  rendering(res, index);
});

router.get('/', function(req, res, next) {
  rendering(res, 0);
});

function rendering(res, index) {
  res.render('index', {
    title: 'Express',
    week_index: index,
    previous_index: Number(index) - 1,
    next_index: Number(index) + 1
  })
}

module.exports = router;
