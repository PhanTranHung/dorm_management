var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

// router.get('/about', (req, res) => {
//   console.log('Request for about page recieved');
//   res.render('about');
// });

module.exports = router;
