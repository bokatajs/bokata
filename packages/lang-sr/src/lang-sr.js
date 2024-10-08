const TokenizerSr = require('./tokenizer-sr');
const StemmerSr = require('./stemmer-sr');
const StopwordsSr = require('./stopwords-sr');
const NormalizerSr = require('./normalizer-sr');
const SentimentSr = require('./sentiment/sentiment_sr');

class LangSr {
  register(container) {
    container.use(TokenizerSr);
    container.use(StemmerSr);
    container.use(StopwordsSr);
    container.use(NormalizerSr);
    container.register('sentiment-sr', SentimentSr);
  }
}

module.exports = LangSr;
