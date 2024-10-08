const LangNe = require('./lang-ne');
const TokenizerNe = require('./tokenizer-ne');
const StemmerNe = require('./stemmer-ne');
const StopwordsNe = require('./stopwords-ne');
const NormalizerNe = require('./normalizer-ne');
const SentimentNe = require('./sentiment/sentiment_ne');

module.exports = {
  LangNe,
  StemmerNe,
  StopwordsNe,
  TokenizerNe,
  NormalizerNe,
  SentimentNe,
};
