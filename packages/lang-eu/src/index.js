const LangEu = require('./lang-eu');
const TokenizerEu = require('./tokenizer-eu');
const StemmerEu = require('./stemmer-eu');
const StopwordsEu = require('./stopwords-eu');
const NormalizerEu = require('./normalizer-eu');
const SentimentEu = require('./sentiment/sentiment_eu');

module.exports = {
  LangEu,
  StemmerEu,
  StopwordsEu,
  TokenizerEu,
  NormalizerEu,
  SentimentEu,
};
