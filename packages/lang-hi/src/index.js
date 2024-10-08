const LangHi = require('./lang-hi');
const TokenizerHi = require('./tokenizer-hi');
const StemmerHi = require('./stemmer-hi');
const StopwordsHi = require('./stopwords-hi');
const NormalizerHi = require('./normalizer-hi');
const SentimentHi = require('./sentiment/sentiment_hi');

module.exports = {
  LangHi,
  StemmerHi,
  StopwordsHi,
  TokenizerHi,
  NormalizerHi,
  SentimentHi,
};
