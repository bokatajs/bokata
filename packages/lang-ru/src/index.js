const LangRu = require('./lang-ru');
const TokenizerRu = require('./tokenizer-ru');
const StemmerRu = require('./stemmer-ru');
const StopwordsRu = require('./stopwords-ru');
const NormalizerRu = require('./normalizer-ru');
const SentimentRu = require('./sentiment/sentiment_ru');

module.exports = {
  LangRu,
  StemmerRu,
  StopwordsRu,
  TokenizerRu,
  NormalizerRu,
  SentimentRu,
};
