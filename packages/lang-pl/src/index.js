const LangPl = require('./lang-pl');
const TokenizerPl = require('./tokenizer-pl');
const StemmerPl = require('./stemmer-pl');
const StopwordsPl = require('./stopwords-pl');
const NormalizerPl = require('./normalizer-pl');
const SentimentPl = require('./sentiment/sentiment_pl');

module.exports = {
  LangPl,
  StemmerPl,
  StopwordsPl,
  TokenizerPl,
  NormalizerPl,
  SentimentPl,
};
