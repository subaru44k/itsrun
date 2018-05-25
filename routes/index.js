var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  rendering('oda_field', 0, res, 0);
});

router.get('/oda_field', function(req, res, next) {
  rendering('oda_field', 'nVfuSmsj9cULg3712chv', res, 0);
});

router.get('/todoroki', function(req, res, next) {
  rendering('todoroki', '67c7uxgRWDkxr1S4gPaR', res, 0);
});

router.get('/yumenoshima', function(req, res, next) {
  rendering('yumenoshima', 'VFurPbbeejEbtu1JNTzF', res, 0)
});

function rendering(page_name, stadiumId, res, index) {
  res.render(page_name, {
    title: 'いつラン',
    stadium_id: stadiumId,
    week_index: index,
    page_base: page_name,
    previous_index: Number(index) - 1,
    next_index: Number(index) + 1
  })
}

module.exports = router;
