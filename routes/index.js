var express = require('express');
var webpush = require('web-push-encryption');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/notification', function(req, res, next) {
  body = req.body
  webpush.sendWebPush(body.message, body.subscription, body.gcm_key);
  res.end();
});

module.exports = router;
