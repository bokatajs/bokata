const LangTr = require('./lang-tr');
const TokenizerTr = require('./tokenizer-tr');
const StemmerTr = require('./stemmer-tr');
const StopwordsTr = require('./stopwords-tr');
const NormalizerTr = require('./normalizer-tr');
const SentimentTr = require('./sentiment/sentiment_tr');

module.exports = {
  LangTr,
  StemmerTr,
  StopwordsTr,
  TokenizerTr,
  NormalizerTr,
  SentimentTr,
};
