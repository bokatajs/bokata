const TokenizerEl = require('./tokenizer-el');
const StemmerEl = require('./stemmer-el');
const StopwordsEl = require('./stopwords-el');
const NormalizerEl = require('./normalizer-el');
const SentimentEl = require('./sentiment/sentiment_el');

class LangEl {
  register(container) {
    container.use(TokenizerEl);
    container.use(StemmerEl);
    container.use(StopwordsEl);
    container.use(NormalizerEl);
    container.register('sentiment-el', SentimentEl);
  }
}

module.exports = LangEl;
