const TokenizerTh = require('./tokenizer-th');
const StemmerTh = require('./stemmer-th');
const StopwordsTh = require('./stopwords-th');
const NormalizerTh = require('./normalizer-th');
const SentimentTh = require('./sentiment/sentiment_th');

class LangTh {
  register(container) {
    container.use(TokenizerTh);
    container.use(StemmerTh);
    container.use(StopwordsTh);
    container.use(NormalizerTh);
    container.register('sentiment-th', SentimentTh);
  }
}

module.exports = LangTh;
