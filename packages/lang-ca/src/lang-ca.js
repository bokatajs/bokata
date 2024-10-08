const TokenizerCa = require('./tokenizer-ca');
const StemmerCa = require('./stemmer-ca');
const StopwordsCa = require('./stopwords-ca');
const NormalizerCa = require('./normalizer-ca');
const SentimentCa = require('./sentiment/sentiment_ca');
const registerTrigrams = require('./trigrams');

class LangCa {
  register(container) {
    container.use(TokenizerCa);
    container.use(StemmerCa);
    container.use(StopwordsCa);
    container.use(NormalizerCa);
    container.register('sentiment-ca', SentimentCa);
    registerTrigrams(container);
  }
}

module.exports = LangCa;
