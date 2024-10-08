const TokenizerNe = require('./tokenizer-ne');
const StemmerNe = require('./stemmer-ne');
const StopwordsNe = require('./stopwords-ne');
const NormalizerNe = require('./normalizer-ne');
const SentimentNe = require('./sentiment/sentiment_ne');

class LangNe {
  register(container) {
    container.use(TokenizerNe);
    container.use(StemmerNe);
    container.use(StopwordsNe);
    container.use(NormalizerNe);
    container.register('sentiment-ne', SentimentNe);
  }
}

module.exports = LangNe;
