const TokenizerEu = require('./tokenizer-eu');
const StemmerEu = require('./stemmer-eu');
const StopwordsEu = require('./stopwords-eu');
const NormalizerEu = require('./normalizer-eu');
const SentimentEu = require('./sentiment/sentiment_eu');

class LangEu {
  register(container) {
    container.use(TokenizerEu);
    container.use(StemmerEu);
    container.use(StopwordsEu);
    container.use(NormalizerEu);
    container.register('sentiment-eu', SentimentEu);
  }
}

module.exports = LangEu;
