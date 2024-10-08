const TokenizerLt = require('./tokenizer-lt');
const StemmerLt = require('./stemmer-lt');
const StopwordsLt = require('./stopwords-lt');
const NormalizerLt = require('./normalizer-lt');
const SentimentLt = require('./sentiment/sentiment_lt');

class LangLt {
  register(container) {
    container.use(TokenizerLt);
    container.use(StemmerLt);
    container.use(StopwordsLt);
    container.use(NormalizerLt);
    container.register('sentiment-lt', SentimentLt);
  }
}

module.exports = LangLt;
