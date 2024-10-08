const LangEl = require('./lang-el');
const TokenizerEl = require('./tokenizer-el');
const StemmerEl = require('./stemmer-el');
const StopwordsEl = require('./stopwords-el');
const NormalizerEl = require('./normalizer-el');
const SentimentEl = require('./sentiment/sentiment_el');

module.exports = {
  LangEl,
  StemmerEl,
  StopwordsEl,
  TokenizerEl,
  NormalizerEl,
  SentimentEl,
};
