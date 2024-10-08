const TokenizerFi = require('./tokenizer-fi');
const StemmerFi = require('./stemmer-fi');
const StopwordsFi = require('./stopwords-fi');
const NormalizerFi = require('./normalizer-fi');
const SentimentFi = require('./sentiment/sentiment_fi');
const registerTrigrams = require('./trigrams');

class LangFi {
  register(container) {
    container.use(TokenizerFi);
    container.use(StemmerFi);
    container.use(StopwordsFi);
    container.use(NormalizerFi);
    container.register('sentiment-fi', SentimentFi);
    registerTrigrams(container);
  }
}

module.exports = LangFi;
