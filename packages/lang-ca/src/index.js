const LangCa = require('./lang-ca');
const TokenizerCa = require('./tokenizer-ca');
const StemmerCa = require('./stemmer-ca');
const StopwordsCa = require('./stopwords-ca');
const NormalizerCa = require('./normalizer-ca');
const SentimentCa = require('./sentiment/sentiment_ca');

module.exports = {
  LangCa,
  StemmerCa,
  StopwordsCa,
  TokenizerCa,
  NormalizerCa,
  SentimentCa,
};
