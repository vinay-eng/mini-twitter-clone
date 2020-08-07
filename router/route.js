const express = require('express');

const router = express.Router()

const {createTweet,getTweets_and_name} = require('../controllers/createTweet')

router
    .route('/createTweet')
    .post(createTweet)
router
    .route('/getTweets_and_name')
    .get(getTweets_and_name)

module.exports = router