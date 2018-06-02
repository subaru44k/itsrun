var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  rendering('oda_field', '0', res, 0);
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

router.get('/toukyou_taiikukan', function(req, res, next) {
  rendering('toukyou_taiikukan', 'Xd7KDIkcO0Rsroho5tBq', res, 0)
});

router.get('/komazawa_olympic', function(req, res, next) {
  rendering('komazawa_olympic', 'WrrQXe67xvIkGfMtJ51E', res, 0)
});

router.get('/edogawaku', function(req, res, next) {
  rendering('edogawaku', 'pViuyE86zXO1q2mMSMtI', res, 0)
});

router.get('/ooihuto', function(req, res, next) {
  rendering('ooihuto', 'TF8vwhZ8d1pB3fOtLMRt', res, 0)
});

function rendering(page_name, stadiumId, res, index) {
  res.render(page_name, {
    stadium_id: stadiumId,
    week_index: index,
  })
}

module.exports = router;
