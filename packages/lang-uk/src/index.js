const LangUk = require('./lang-uk');
const TokenizerUk = require('./tokenizer-uk');
const StemmerUk = require('./stemmer-uk');
const StopwordsUk = require('./stopwords-uk');
const NormalizerUk = require('./normalizer-uk');
const SentimentUk = require('./sentiment/sentiment_uk');

module.exports = {
  LangUk,
  StemmerUk,
  StopwordsUk,
  TokenizerUk,
  NormalizerUk,
  SentimentUk,
};
