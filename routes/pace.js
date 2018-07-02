var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/marathon', function(req, res, next) {
  res.render('pacelist', {
    title: 'いつラン - マラソンのペース表。5kmごとのラップタイム表記。',
    description: 'マラソンの5kmごとのラップタイムがひと目で分かります。サブスリー、サブフォー、サブファイブ、2時間の世界記録まで。スマートフォン対応。'
  })
});

module.exports = router;
