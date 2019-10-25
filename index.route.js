const express = require('express');
const authRoutes = require('./server/auth/auth.route');
const scoreRoutes = require('./server/score/score.route');
const userRoutes = require('./server/user/user.route');

const router = express.Router(); // eslint-disable-line new-cap

// TODO: use glob to match *.route files

/** GET /health-check - Check service health */
router.get('/health-check', (req, res) =>
  res.send('OK')
);

// mount auth routes at /auth
router.use('/auth', authRoutes);

// mount score routes at /scores
router.use('/scores', scoreRoutes);

// mount user routes at /users
router.use('/users', userRoutes);

module.exports = router;
