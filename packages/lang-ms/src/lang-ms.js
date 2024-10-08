const TokenizerMs = require('./tokenizer-ms');
const StemmerMs = require('./stemmer-ms');
const StopwordsMs = require('./stopwords-ms');
const NormalizerMs = require('./normalizer-ms');
const SentimentMs = require('./sentiment/sentiment_ms');

class LangMs {
  register(container) {
    container.use(TokenizerMs);
    container.use(StemmerMs);
    container.use(StopwordsMs);
    container.use(NormalizerMs);
    container.register('sentiment-ms', SentimentMs);
  }
}

module.exports = LangMs;
