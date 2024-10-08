const StemmerBn = require('./stemmer-bn');
const TokenizerBn = require('./tokenizer-bn');
const StopwordsBn = require('./stopwords-bn');
const NormalizerBn = require('./normalizer-bn');
const SentimentBn = require('./sentiment/sentiment_bn');

class LangBn {
  register(container) {
    container.use(StemmerBn);
    container.use(TokenizerBn);
    container.use(StopwordsBn);
    container.use(NormalizerBn);
    container.register('sentiment-bn', SentimentBn);
  }
}

module.exports = LangBn;
