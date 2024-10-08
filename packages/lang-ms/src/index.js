const LangMs = require('./lang-ms');
const TokenizerMs = require('./tokenizer-ms');
const StemmerMs = require('./stemmer-ms');
const StopwordsMs = require('./stopwords-ms');
const NormalizerMs = require('./normalizer-ms');
const SentimentMs = require('./sentiment/sentiment_ms');

module.exports = {
  LangMs,
  StemmerMs,
  StopwordsMs,
  TokenizerMs,
  NormalizerMs,
  SentimentMs,
};
