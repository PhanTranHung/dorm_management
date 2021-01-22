const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/bill', function (req, res, next) {
  res.render('admin/index', { page: 'bill' });
});

router.get('/rooms', function (req, res, next) {
  const dorm = {
    block: [1, 2, 3].map((block) => ({
      id: block,
      floor: [1, 2, 3, 4, 5].map((flr) => ({
        id: flr,
        room: [1, 2, 3, 4, 5, 6, 7, 8].map((r) => ({
          id: `${flr}0${r}`,
          number: ((min, max) => Math.floor(Math.random() * (max - min) + min))(
            0,
            9,
          ),
          total: 8,
          payment: ((min, max) =>
            Math.floor(Math.random() * (max - min) + min))(0, 11),
        })),
      })),
    })),
  };

  res.render('admin/index', {
    page: 'rooms',
    data: { dorm },
  });
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
