const TokenizerZh = require('./tokenizer-zh');
const StemmerZh = require('./stemmer-zh');
const StopwordsZh = require('./stopwords-zh');
const NormalizerZh = require('./normalizer-zh');
const SentimentZh = require('./sentiment/sentiment_zh');

class LangZh {
  register(container) {
    container.use(TokenizerZh);
    container.use(StemmerZh);
    container.use(StopwordsZh);
    container.use(NormalizerZh);
    container.register('sentiment-zh', SentimentZh);
  }
}

module.exports = LangZh;
