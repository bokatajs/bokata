const LangId = require('./lang-id');
const TokenizerId = require('./tokenizer-id');
const StemmerId = require('./stemmer-id');
const StopwordsId = require('./stopwords-id');
const NormalizerId = require('./normalizer-id');
const SentimentId = require('./sentiment/sentiment_id');

module.exports = {
  LangId,
  StemmerId,
  StopwordsId,
  TokenizerId,
  NormalizerId,
  SentimentId,
};
