const TokenizerGa = require('./tokenizer-ga');
const StemmerGa = require('./stemmer-ga');
const StopwordsGa = require('./stopwords-ga');
const NormalizerGa = require('./normalizer-ga');
const SentimentGa = require('./sentiment/sentiment_ga');

class LangGa {
  register(container) {
    container.use(TokenizerGa);
    container.use(StemmerGa);
    container.use(StopwordsGa);
    container.use(NormalizerGa);
    container.register('sentiment-ga', SentimentGa);
  }
}

module.exports = LangGa;
