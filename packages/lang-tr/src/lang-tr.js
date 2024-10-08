const TokenizerTr = require('./tokenizer-tr');
const StemmerTr = require('./stemmer-tr');
const StopwordsTr = require('./stopwords-tr');
const NormalizerTr = require('./normalizer-tr');
const SentimentTr = require('./sentiment/sentiment_tr');
const registerTrigrams = require('./trigrams');

class LangTr {
  register(container) {
    container.use(TokenizerTr);
    container.use(StemmerTr);
    container.use(StopwordsTr);
    container.use(NormalizerTr);
    container.register('sentiment-tr', SentimentTr);
    registerTrigrams(container);
  }
}

module.exports = LangTr;
