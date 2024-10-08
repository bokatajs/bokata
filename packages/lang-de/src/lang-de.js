const TokenizerDe = require('./tokenizer-de');
const StemmerDe = require('./stemmer-de');
const StopwordsDe = require('./stopwords-de');
const NormalizerDe = require('./normalizer-de');
const SentimentDe = require('./sentiment/sentiment_de');
const registerTrigrams = require('./trigrams');

class LangDe {
  register(container) {
    container.use(TokenizerDe);
    container.use(StemmerDe);
    container.use(StopwordsDe);
    container.use(NormalizerDe);
    container.register('sentiment-de', SentimentDe);
    registerTrigrams(container);
  }
}

module.exports = LangDe;
