const TokenizerDa = require('./tokenizer-da');
const StemmerDa = require('./stemmer-da');
const StopwordsDa = require('./stopwords-da');
const NormalizerDa = require('./normalizer-da');
const SentimentDa = require('./sentiment/sentiment_da');
const registerTrigrams = require('./trigrams');

class LangDa {
  register(container) {
    container.use(TokenizerDa);
    container.use(StemmerDa);
    container.use(StopwordsDa);
    container.use(NormalizerDa);
    container.register('sentiment-da', SentimentDa);
    registerTrigrams(container);
  }
}

module.exports = LangDa;
