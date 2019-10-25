const express = require('express');
const scoreCtrl = require('./score.controller');
const validate = require('express-validation');
const paramValidation = require('../../config/param-validation');

const router = express.Router(); // eslint-disable-line new-cap

router.route('/')
  /** GET /api/score - Get list of scores */
  .get(scoreCtrl.list)

  /** POST /api/scores - Create new score */
  .post(validate(paramValidation.createScore), scoreCtrl.create);

module.exports = router;
