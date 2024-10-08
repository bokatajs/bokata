const TokenizerHi = require('./tokenizer-hi');
const StemmerHi = require('./stemmer-hi');
const StopwordsHi = require('./stopwords-hi');
const NormalizerHi = require('./normalizer-hi');
const SentimentHi = require('./sentiment/sentiment_hi');
const registerTrigrams = require('./trigrams');

class LangHi {
  register(container) {
    container.use(TokenizerHi);
    container.use(StemmerHi);
    container.use(StopwordsHi);
    container.use(NormalizerHi);
    container.register('sentiment-hi', SentimentHi);
    registerTrigrams(container);
  }
}

module.exports = LangHi;
