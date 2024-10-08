const LangNl = require('./lang-nl');
const TokenizerNl = require('./tokenizer-nl');
const StemmerNl = require('./stemmer-nl');
const StopwordsNl = require('./stopwords-nl');
const NormalizerNl = require('./normalizer-nl');
const SentimentNl = require('./sentiment/sentiment_nl');

module.exports = {
  LangNl,
  StemmerNl,
  StopwordsNl,
  TokenizerNl,
  NormalizerNl,
  SentimentNl,
};
