const Score = require('./score.model');

/**
 * Create new score
 * @property {string} req.body.username - The username of the scorer.
 * @property {number} req.body.value - The value of the score.
 * @returns {Score}
 */
function create(req, res, next) {
  const score = new Score({
    username: req.body.username,
    value: req.body.value
  });

  score.save()
    .then(savedScore => res.json(savedScore))
    .catch(e => next(e));
}

/**
 * Get score list.
 * @property {number} req.query.skip - Number of scores to be skipped.
 * @property {number} req.query.limit - Limit number of scores to be returned.
 * @returns {Score[]}
 */
function list(req, res, next) {
  const { limit = 50, skip = 0 } = req.query;
  Score.list({ limit, skip })
    .then(scores => res.json(scores))
    .catch(e => next(e));
}

module.exports = { create, list };
