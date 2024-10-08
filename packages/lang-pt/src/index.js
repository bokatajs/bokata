const LangPt = require('./lang-pt');
const TokenizerPt = require('./tokenizer-pt');
const StemmerPt = require('./stemmer-pt');
const StopwordsPt = require('./stopwords-pt');
const NormalizerPt = require('./normalizer-pt');
const SentimentPt = require('./sentiment/sentiment_pt');

module.exports = {
  LangPt,
  StemmerPt,
  StopwordsPt,
  TokenizerPt,
  NormalizerPt,
  SentimentPt,
};
