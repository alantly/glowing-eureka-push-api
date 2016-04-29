var express = require('express');
var webpush = require('web-push-encryption');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/notification', function(req, res, next) {
  body = req.body;
  webpush.setGCMAPIKey(body.gcm_key);
  webpush.sendWebPush(JSON.stringify(body.payload), body.subscription);
  res.end();
});

module.exports = router;
