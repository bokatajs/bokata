const LangEs = require('./lang-es');
const TokenizerEs = require('./tokenizer-es');
const StemmerEs = require('./stemmer-es');
const StopwordsEs = require('./stopwords-es');
const NormalizerEs = require('./normalizer-es');
const SentimentEs = require('./sentiment/sentiment_es');

module.exports = {
  LangEs,
  StemmerEs,
  StopwordsEs,
  TokenizerEs,
  NormalizerEs,
  SentimentEs,
};
