const LangGa = require('./lang-ga');
const TokenizerGa = require('./tokenizer-ga');
const StemmerGa = require('./stemmer-ga');
const StopwordsGa = require('./stopwords-ga');
const NormalizerGa = require('./normalizer-ga');
const SentimentGa = require('./sentiment/sentiment_ga');

module.exports = {
  LangGa,
  StemmerGa,
  StopwordsGa,
  TokenizerGa,
  NormalizerGa,
  SentimentGa,
};
