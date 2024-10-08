const TokenizerFa = require('./tokenizer-fa');
const StemmerFa = require('./stemmer-fa');
const StopwordsFa = require('./stopwords-fa');
const NormalizerFa = require('./normalizer-fa');
const SentimentFa = require('./sentiment/sentiment_fa');
const registerTrigrams = require('./trigrams');

class LangFa {
  register(container) {
    container.use(TokenizerFa);
    container.use(StemmerFa);
    container.use(StopwordsFa);
    container.use(NormalizerFa);
    container.register('sentiment-fa', SentimentFa);
    registerTrigrams(container);
  }
}

module.exports = LangFa;
