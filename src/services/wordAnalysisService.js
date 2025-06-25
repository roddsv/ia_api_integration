const stopWords = require('../utils/stopwords');

getPromptAmount = (text) => {
    const words = text.toLowerCase().match(/\b\w+\b/g)
    .filter(word => !stopwords.includes(word));

    const wordCounter = words.length;

    const frequence = {};

    words.forEach(w =>
        frequence[w] = (frequence[w] || 0) + 1);

    const topFiveWords = Object.entries(frequence)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 5)
        .map(([word, count]) => ({ word, count}));

    return { wordCounter, topFiveWords: topFiveWords }
}

module.exports = getPromptAmount;