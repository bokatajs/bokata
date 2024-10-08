const TokenizerHu = require('./tokenizer-hu');
const StemmerHu = require('./stemmer-hu');
const StopwordsHu = require('./stopwords-hu');
const NormalizerHu = require('./normalizer-hu');
const SentimentHu = require('./sentiment/sentiment_hu');
const registerTrigrams = require('./trigrams');

class LangHu {
  register(container) {
    container.use(TokenizerHu);
    container.use(StemmerHu);
    container.use(StopwordsHu);
    container.use(NormalizerHu);
    container.register('sentiment-hu', SentimentHu);
    registerTrigrams(container);
  }
}

module.exports = LangHu;
