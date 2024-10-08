const LangGl = require('./lang-gl');
const TokenizerGl = require('./tokenizer-gl');
const StemmerGl = require('./stemmer-gl');
const StopwordsGl = require('./stopwords-gl');
const NormalizerGl = require('./normalizer-gl');
const SentimentGl = require('./sentiment/sentiment_gl');

module.exports = {
  LangGl,
  StemmerGl,
  StopwordsGl,
  TokenizerGl,
  NormalizerGl,
  SentimentGl,
};
