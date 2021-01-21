const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/bill', function (req, res, next) {
  res.render('admin/index', { page: 'bill' });
});

router.get('/rooms', function (req, res, next) {
  res.render('admin/index', { page: 'rooms' });
});

router.get('/student-feedback', function (req, res, next) {
  res.render('admin/index', { page: 'student-feedback' });
});

router.get('/students', function (req, res, next) {
  res.render('admin/index', { page: 'students' });
});

router.get('/login', function (req, res, next) {
  res.render('admin/login');
});

router.get(['/', '/dashboard'], function (req, res, next) {
  res.render('admin/index', { page: 'dashboard' });
});

module.exports = router;
