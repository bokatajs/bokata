const TokenizerUk = require('./tokenizer-uk');
const StemmerUk = require('./stemmer-uk');
const StopwordsUk = require('./stopwords-uk');
const NormalizerUk = require('./normalizer-uk');
const SentimentUk = require('./sentiment/sentiment_uk');
const registerTrigrams = require('./trigrams');

class LangUk {
  register(container) {
    container.use(TokenizerUk);
    container.use(StemmerUk);
    container.use(StopwordsUk);
    container.use(NormalizerUk);
    container.register('sentiment-uk', SentimentUk);
    registerTrigrams(container);
  }
}

module.exports = LangUk;
