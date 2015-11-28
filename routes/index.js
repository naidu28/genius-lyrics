var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Lyricisms' });
});

router.post('/searchArtist', function(req, res) {
  var data = req.body;
  console.log(JSON.stringify(data));
  res.status(200).send('Call was a success. Aborting.');
});

module.exports = router;
