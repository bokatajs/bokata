const TokenizerRo = require('./tokenizer-ro');
const StemmerRo = require('./stemmer-ro');
const StopwordsRo = require('./stopwords-ro');
const NormalizerRo = require('./normalizer-ro');
const SentimentRo = require('./sentiment/sentiment_ro');

class LangRo {
  register(container) {
    container.use(TokenizerRo);
    container.use(StemmerRo);
    container.use(StopwordsRo);
    container.use(NormalizerRo);
    container.register('sentiment-ro', SentimentRo);
  }
}

module.exports = LangRo;
