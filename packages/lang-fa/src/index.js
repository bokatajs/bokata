const LangFa = require('./lang-fa');
const TokenizerFa = require('./tokenizer-fa');
const StemmerFa = require('./stemmer-fa');
const StopwordsFa = require('./stopwords-fa');
const NormalizerFa = require('./normalizer-fa');
const SentimentFa = require('./sentiment/sentiment_fa');

module.exports = {
  LangFa,
  StemmerFa,
  StopwordsFa,
  TokenizerFa,
  NormalizerFa,
  SentimentFa,
};
