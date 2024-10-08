const LangFr = require('./lang-fr');
const TokenizerFr = require('./tokenizer-fr');
const StemmerFr = require('./stemmer-fr');
const StopwordsFr = require('./stopwords-fr');
const NormalizerFr = require('./normalizer-fr');
const SentimentFr = require('./sentiment/sentiment_fr');

module.exports = {
  LangFr,
  StemmerFr,
  StopwordsFr,
  TokenizerFr,
  NormalizerFr,
  SentimentFr,
};
