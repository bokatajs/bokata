const TokenizerId = require('./tokenizer-id');
const StemmerId = require('./stemmer-id');
const StopwordsId = require('./stopwords-id');
const NormalizerId = require('./normalizer-id');
const SentimentId = require('./sentiment/sentiment_id');
const registerTrigrams = require('./trigrams');

class LangId {
  register(container) {
    container.use(TokenizerId);
    container.use(StemmerId);
    container.use(StopwordsId);
    container.use(NormalizerId);
    container.register('sentiment-id', SentimentId);
    registerTrigrams(container);
  }
}

module.exports = LangId;
