const LangEn = require('./lang-en');
const TokenizerEn = require('./tokenizer-en');
const StemmerEn = require('./stemmer-en');
const StopwordsEn = require('./stopwords-en');
const NormalizerEn = require('./normalizer-en');
const SentimentEn = require('./sentiment/sentiment_en');
const registerTrigrams = require('./trigrams');

module.exports = {
  LangEn,
  StemmerEn,
  StopwordsEn,
  TokenizerEn,
  NormalizerEn,
  SentimentEn,
  registerTrigrams,
};
