const TokenizerTa = require('./tokenizer-ta');
const StemmerTa = require('./stemmer-ta');
const StopwordsTa = require('./stopwords-ta');
const NormalizerTa = require('./normalizer-ta');
const SentimentTa = require('./sentiment/sentiment_ta');

class LangTa {
  register(container) {
    container.use(TokenizerTa);
    container.use(StemmerTa);
    container.use(StopwordsTa);
    container.use(NormalizerTa);
    container.register('sentiment-ta', SentimentTa);
  }
}

module.exports = LangTa;
