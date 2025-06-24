const sentimentService = require('../../services/sentimentService');

analyzeSentimentText = async (req, res, next) => {
    try {
        const { text } = req.body;
        if (!text) {
            return res.status(400).json({ error: 'Nenhuma frase inserida para análise de sentimento'});

            const sentiment = await sentimentService.getSentimento(text);

            res.status(200).json({'sentimento': sentiment});
        }
    } catch (e) {
        next(e);
    }
}

module.exports = analyzeSentimentText;