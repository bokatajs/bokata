const LangDa = require('./lang-da');
const TokenizerDa = require('./tokenizer-da');
const StemmerDa = require('./stemmer-da');
const StopwordsDa = require('./stopwords-da');
const NormalizerDa = require('./normalizer-da');
const SentimentDa = require('./sentiment/sentiment_da');

module.exports = {
  LangDa,
  StemmerDa,
  StopwordsDa,
  TokenizerDa,
  NormalizerDa,
  SentimentDa,
};
