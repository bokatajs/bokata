const LangSl = require('./lang-sl');
const TokenizerSl = require('./tokenizer-sl');
const StemmerSl = require('./stemmer-sl');
const StopwordsSl = require('./stopwords-sl');
const NormalizerSl = require('./normalizer-sl');
const SentimentSl = require('./sentiment/sentiment_sl');

module.exports = {
  LangSl,
  StemmerSl,
  StopwordsSl,
  TokenizerSl,
  NormalizerSl,
  SentimentSl,
};
