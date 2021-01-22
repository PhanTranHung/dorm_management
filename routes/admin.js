const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/bill', function (req, res, next) {
  res.render('admin/index', { page: 'bill' });
});

router.get('/rooms', function (req, res, next) {
  const dorm = {
    floors: [
      {
        id: 1,
        rooms: [
          {
            id: 101,
            number: 0,
            total: 8,
          },
          {
            id: 101,
            number: 8,
            total: 8,
          },
          {
            id: 101,
            number: 7,
            total: 8,
          },
          {
            id: 101,
            number: 0,
            total: 8,
          },
          {
            id: 101,
            number: 6,
            total: 8,
          },
          {
            id: 101,
            number: 0,
            total: 8,
          },
          {
            id: 101,
            number: 0,
            total: 8,
          },
          {
            id: 101,
            number: 0,
            total: 8,
          },
        ],
      },
      {
        id: 1,
        rooms: [
          {
            id: 101,
            number: 0,
            total: 8,
          },
          {
            id: 101,
            number: 8,
            total: 8,
          },
          {
            id: 101,
            number: 7,
            total: 8,
          },
          {
            id: 101,
            number: 0,
            total: 8,
          },
          {
            id: 101,
            number: 6,
            total: 8,
          },
          {
            id: 101,
            number: 0,
            total: 8,
          },
          {
            id: 101,
            number: 0,
            total: 8,
          },
          {
            id: 101,
            number: 0,
            total: 8,
          },
        ],
      },
      {
        id: 1,
        rooms: [
          {
            id: 101,
            number: 0,
            total: 8,
          },
          {
            id: 101,
            number: 8,
            total: 8,
          },
          {
            id: 101,
            number: 7,
            total: 8,
          },
          {
            id: 101,
            number: 0,
            total: 8,
          },
          {
            id: 101,
            number: 6,
            total: 8,
          },
          {
            id: 101,
            number: 0,
            total: 8,
          },
          {
            id: 101,
            number: 0,
            total: 8,
          },
          {
            id: 101,
            number: 0,
            total: 8,
          },
        ],
      },
      {
        id: 1,
        rooms: [
          {
            id: 101,
            number: 0,
            total: 8,
          },
          {
            id: 101,
            number: 8,
            total: 8,
          },
          {
            id: 101,
            number: 7,
            total: 8,
          },
          {
            id: 101,
            number: 0,
            total: 8,
          },
          {
            id: 101,
            number: 6,
            total: 8,
          },
          {
            id: 101,
            number: 0,
            total: 8,
          },
          {
            id: 101,
            number: 0,
            total: 8,
          },
          {
            id: 101,
            number: 0,
            total: 8,
          },
        ],
      },
      {
        id: 1,
        rooms: [
          {
            id: 101,
            number: 0,
            total: 8,
          },
          {
            id: 101,
            number: 8,
            total: 8,
          },
          {
            id: 101,
            number: 7,
            total: 8,
          },
          {
            id: 101,
            number: 0,
            total: 8,
          },
          {
            id: 101,
            number: 6,
            total: 8,
          },
          {
            id: 101,
            number: 0,
            total: 8,
          },
          {
            id: 101,
            number: 0,
            total: 8,
          },
          {
            id: 101,
            number: 0,
            total: 8,
          },
        ],
      },
    ],
  };

  res.render('admin/index', {
    page: 'rooms',
    data: { rooms: dorm },
  });
});

router.get('/administrators', function (req, res, next) {
  res.render('admin/index', { page: 'administrators' });
});

router.get('/student-register', function (req, res, next) {
  res.render('admin/index', { page: 'student-register' });
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
