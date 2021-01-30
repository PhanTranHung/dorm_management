const express = require('express');
const router = express.Router();
const newsService = require('../services/user-service/news');

const userpath = 'user/index';

router.get('/news/:id', async function (req, res, next) {
  const data = await newsService.getNews(req.params.id);
  res.render(userpath, { page: 'news', data });
});

router.get('/about', async function (req, res, next) {
  res.render(userpath, { page: 'about' });
});


router.get('/signup', async function (req, res, next) {
  res.render(userpath, { page: 'signup' });
});

router.get('/suc', async function (req, res, next) {
  res.render(userpath, { page: 'suc' });
});

router.get('/news', async function (req, res, next) {
  const data = await newsService.getAllNews();
  res.render(userpath, { page: 'news', data });
});

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.render(userpath, { page: 'home' });
});

module.exports = router;
