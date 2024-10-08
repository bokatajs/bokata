const LangFi = require('./lang-fi');
const TokenizerFi = require('./tokenizer-fi');
const StemmerFi = require('./stemmer-fi');
const StopwordsFi = require('./stopwords-fi');
const NormalizerFi = require('./normalizer-fi');
const SentimentFi = require('./sentiment/sentiment_fi');

module.exports = {
  LangFi,
  StemmerFi,
  StopwordsFi,
  TokenizerFi,
  NormalizerFi,
  SentimentFi,
};
