const LangTh = require('./lang-th');
const TokenizerTh = require('./tokenizer-th');
const StemmerTh = require('./stemmer-th');
const StopwordsTh = require('./stopwords-th');
const NormalizerTh = require('./normalizer-th');
const SentimentTh = require('./sentiment/sentiment_th');

module.exports = {
  LangTh,
  StemmerTh,
  StopwordsTh,
  TokenizerTh,
  NormalizerTh,
  SentimentTh,
};
