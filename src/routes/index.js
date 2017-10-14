const express = require('express');
const router = express.Router();
require('dotenv').config();

router.get('/', (req, res, next) => {
    const apiKey = {
        'fb': process.env.FACEBOOK_API_KEY
    };

    res.render('welcome', {
        'api_key': apiKey
    });
});

module.exports = router;