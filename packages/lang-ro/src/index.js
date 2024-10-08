const LangRo = require('./lang-ro');
const TokenizerRo = require('./tokenizer-ro');
const StemmerRo = require('./stemmer-ro');
const StopwordsRo = require('./stopwords-ro');
const NormalizerRo = require('./normalizer-ro');
const SentimentRo = require('./sentiment/sentiment_ro');

module.exports = {
  LangRo,
  StemmerRo,
  StopwordsRo,
  TokenizerRo,
  NormalizerRo,
  SentimentRo,
};
