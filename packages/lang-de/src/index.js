const LangDe = require('./lang-de');
const TokenizerDe = require('./tokenizer-de');
const StemmerDe = require('./stemmer-de');
const StopwordsDe = require('./stopwords-de');
const NormalizerDe = require('./normalizer-de');
const SentimentDe = require('./sentiment/sentiment_de');

module.exports = {
  LangDe,
  StemmerDe,
  StopwordsDe,
  TokenizerDe,
  NormalizerDe,
  SentimentDe,
};
