const StemmerHy = require('./stemmer-hy');
const TokenizerHy = require('./tokenizer-hy');
const StopwordsHy = require('./stopwords-hy');
const NormalizerHy = require('./normalizer-hy');
const SentimentHy = require('./sentiment/sentiment_hy');

class LangHy {
  register(container) {
    container.use(StemmerHy);
    container.use(TokenizerHy);
    container.use(StopwordsHy);
    container.use(NormalizerHy);
    container.register('sentiment-hy', SentimentHy);
  }
}

module.exports = LangHy;
