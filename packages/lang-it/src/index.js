const LangIt = require('./lang-it');
const TokenizerIt = require('./tokenizer-it');
const StemmerIt = require('./stemmer-it');
const StopwordsIt = require('./stopwords-it');
const NormalizerIt = require('./normalizer-it');
const SentimentIt = require('./sentiment/sentiment_it');

module.exports = {
  LangIt,
  StemmerIt,
  StopwordsIt,
  TokenizerIt,
  NormalizerIt,
  SentimentIt,
};
