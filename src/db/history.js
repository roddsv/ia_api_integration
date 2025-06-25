let wordsInCache = [];

save = (data) => {
    wordsInCache.push({ ...data, timeStamp: new Date() });
    if (wordsInCache.length > 10) cache.shift();
};

exports.getAll = () => wordsInCache;