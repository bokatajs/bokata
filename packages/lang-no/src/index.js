const LangNo = require('./lang-no');
const TokenizerNo = require('./tokenizer-no');
const StemmerNo = require('./stemmer-no');
const StopwordsNo = require('./stopwords-no');
const NormalizerNo = require('./normalizer-no');
const SentimentNo = require('./sentiment/sentiment_no');

module.exports = {
  LangNo,
  StemmerNo,
  StopwordsNo,
  TokenizerNo,
  NormalizerNo,
  SentimentNo,
};
