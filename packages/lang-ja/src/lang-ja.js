const TokenizerJa = require('./tokenizer-ja');
const StemmerJa = require('./stemmer-ja');
const StopwordsJa = require('./stopwords-ja');
const NormalizerJa = require('./normalizer-ja');
const SentimentJa = require('./sentiment/sentiment_ja');

class LangJa {
  register(container) {
    container.use(TokenizerJa);
    container.use(StemmerJa);
    container.use(StopwordsJa);
    container.use(NormalizerJa);
    container.register('sentiment-ja', SentimentJa);
  }
}

module.exports = LangJa;
