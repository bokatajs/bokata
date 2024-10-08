const LangHu = require('./lang-hu');
const TokenizerHu = require('./tokenizer-hu');
const StemmerHu = require('./stemmer-hu');
const StopwordsHu = require('./stopwords-hu');
const NormalizerHu = require('./normalizer-hu');
const SentimentHu = require('./sentiment/sentiment_hu');

module.exports = {
  LangHu,
  StemmerHu,
  StopwordsHu,
  TokenizerHu,
  NormalizerHu,
  SentimentHu,
};
