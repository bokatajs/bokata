const TokenizerFr = require('./tokenizer-fr');
const StemmerFr = require('./stemmer-fr');
const StopwordsFr = require('./stopwords-fr');
const NormalizerFr = require('./normalizer-fr');
const SentimentFr = require('./sentiment/sentiment_fr');
const registerTrigrams = require('./trigrams');

class LangFr {
  register(container) {
    container.use(TokenizerFr);
    container.use(StemmerFr);
    container.use(StopwordsFr);
    container.use(NormalizerFr);
    container.register('sentiment-fr', SentimentFr);
    registerTrigrams(container);
  }
}

module.exports = LangFr;
