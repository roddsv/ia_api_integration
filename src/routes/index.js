const express = require('express');
const router = express.Router();
const analyzeSentiment = require('../controllers/analyzeSentiment');

router.get('/search-term', analyzeSentiment.searchForTerm)
router.post('/analyze-text', analyzeSentiment.analyzeSentimentText);

module.exports = router;