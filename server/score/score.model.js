const Promise = require('bluebird');
const mongoose = require('mongoose');
const httpStatus = require('http-status');
const APIError = require('../helpers/APIError');

/**
 * Score Schema
 */
const ScoreSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  value: {
    type: Number,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

/**
 * Add your
 * - pre-save hooks
 * - validations
 * - virtuals
 */

/**
 * Methods
 */
ScoreSchema.method({
});

/**
 * Statics
 */
ScoreSchema.statics = {
  /**
   * Get score
   * @param {ObjectId} id - The objectId of score.
   * @returns {Promise<Score, APIError>}
   */
  get(id) {
    return this.findById(id)
      .exec()
      .then((score) => {
        if (score) {
          return score;
        }
        const err = new APIError('No such score exists!', httpStatus.NOT_FOUND);
        return Promise.reject(err);
      });
  },

  /**
   * List scores in descending order of 'value'.
   * @param {number} skip - Number of scores to be skipped.
   * @param {number} limit - Limit number of scores to be returned.
   * @returns {Promise<Score[]>}
   */
  list({ skip = 0, limit = 50 } = {}) {
    return this.find()
      .sort({ value: -1 })
      .skip(+skip)
      .limit(+limit)
      .exec();
  }
};

/**
 * @typedef Score
 */
module.exports = mongoose.model('Score', ScoreSchema);
