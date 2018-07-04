var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  rendering('./ja/oda_field', '織田フィールド', '(代々木公園陸上競技場)', 'nVfuSmsj9cULg3712chv', res, 0);
});

router.get('/oda_field', function(req, res, next) {
  rendering('./ja/oda_field', '織田フィールド', '(代々木公園陸上競技場)', 'nVfuSmsj9cULg3712chv', res, 0);
});

router.get('/todoroki', function(req, res, next) {
  rendering('./ja/todoroki', '等々力陸上競技場', '', '67c7uxgRWDkxr1S4gPaR', res, 0);
});

router.get('/yumenoshima', function(req, res, next) {
  rendering('./ja/yumenoshima', '夢の島陸上競技場', '', 'VFurPbbeejEbtu1JNTzF', res, 0)
});

router.get('/toukyou_taiikukan', function(req, res, next) {
  rendering('./ja/toukyou_taiikukan', '東京体育館', '', 'Xd7KDIkcO0Rsroho5tBq', res, 0)
});

router.get('/komazawa_olympic', function(req, res, next) {
  rendering('./ja/komazawa_olympic', '駒沢オリンピック公園陸上競技場', '', 'WrrQXe67xvIkGfMtJ51E', res, 0)
});

router.get('/edogawaku', function(req, res, next) {
  rendering('./ja/edogawaku', '江戸川区陸上競技場', '', 'pViuyE86zXO1q2mMSMtI', res, 0)
});

router.get('/ooihuto', function(req, res, next) {
  rendering('./ja/ooihuto', '大井ふ頭中央海浜公園スポーツの森陸上競技場', '', 'TF8vwhZ8d1pB3fOtLMRt', res, 0)
});

router.get('/nissan', function(req, res, next) {
  rendering('./ja/nissan', '日産スタジアム', '', 'hcRDuE9rpZfwNlpuIcJ0', res, 0)
});

function rendering(page_name, stadiumName, subName, stadiumId, res, index) {
  res.render(page_name, {
    title: 'いつラン - ' + stadiumName + 'を個人利用する人のための利用時間確認ページ',
    description: stadiumName + subName + '等の陸上競技場を個人利用したい際に、このサイトにて開放日・利用可能時間が確認できます。',
    stadium_id: stadiumId,
    week_index: index,
  })
}

module.exports = router;
