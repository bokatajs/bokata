const LangTa = require('./lang-ta');
const TokenizerTa = require('./tokenizer-ta');
const StemmerTa = require('./stemmer-ta');
const StopwordsTa = require('./stopwords-ta');
const NormalizerTa = require('./normalizer-ta');
const SentimentTa = require('./sentiment/sentiment_ta');

module.exports = {
  LangTa,
  StemmerTa,
  StopwordsTa,
  TokenizerTa,
  NormalizerTa,
  SentimentTa,
};
