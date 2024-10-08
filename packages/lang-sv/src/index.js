const LangSv = require('./lang-sv');
const TokenizerSv = require('./tokenizer-sv');
const StemmerSv = require('./stemmer-sv');
const StopwordsSv = require('./stopwords-sv');
const NormalizerSv = require('./normalizer-sv');
const SentimentSv = require('./sentiment/sentiment_sv');

module.exports = {
  LangSv,
  StemmerSv,
  StopwordsSv,
  TokenizerSv,
  NormalizerSv,
  SentimentSv,
};
