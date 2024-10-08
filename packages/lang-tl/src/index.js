const LangTl = require('./lang-tl');
const TokenizerTl = require('./tokenizer-tl');
const StemmerTl = require('./stemmer-tl');
const StopwordsTl = require('./stopwords-tl');
const NormalizerTl = require('./normalizer-tl');
const SentimentTl = require('./sentiment/sentiment_tl');

module.exports = {
  LangTl,
  StemmerTl,
  StopwordsTl,
  TokenizerTl,
  NormalizerTl,
  SentimentTl,
};
