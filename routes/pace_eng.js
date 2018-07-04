var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/marathon', function(req, res, next) {
  res.render('./eng/pacelist', {
    title: 'It\'s Run - Pace list for marathon. Lap times described in each 5km.',
    description: 'Lap times for marathon. Support variety of paces from 2hurs(World record) to 6hours and a half.'
  })
});

module.exports = router;
