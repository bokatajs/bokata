const TokenizerNo = require('./tokenizer-no');
const StemmerNo = require('./stemmer-no');
const StopwordsNo = require('./stopwords-no');
const NormalizerNo = require('./normalizer-no');
const SentimentNo = require('./sentiment/sentiment_no');

class LangNo {
  register(container) {
    container.use(TokenizerNo);
    container.use(StemmerNo);
    container.use(StopwordsNo);
    container.use(NormalizerNo);
    container.register('sentiment-no', SentimentNo);
  }
}

module.exports = LangNo;
