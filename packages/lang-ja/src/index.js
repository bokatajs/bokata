const LangJa = require('./lang-ja');
const TokenizerJa = require('./tokenizer-ja');
const StemmerJa = require('./stemmer-ja');
const StopwordsJa = require('./stopwords-ja');
const NormalizerJa = require('./normalizer-ja');
const SentimentJa = require('./sentiment/sentiment_ja');

module.exports = {
  LangJa,
  StemmerJa,
  StopwordsJa,
  TokenizerJa,
  NormalizerJa,
  SentimentJa,
};
