const TokenizerSl = require('./tokenizer-sl');
const StemmerSl = require('./stemmer-sl');
const StopwordsSl = require('./stopwords-sl');
const NormalizerSl = require('./normalizer-sl');
const SentimentSl = require('./sentiment/sentiment_sl');
const registerTrigrams = require('./trigrams');

class LangSl {
  register(container) {
    container.use(TokenizerSl);
    container.use(StemmerSl);
    container.use(StopwordsSl);
    container.use(NormalizerSl);
    container.register('sentiment-sl', SentimentSl);
    registerTrigrams(container);
  }
}

module.exports = LangSl;
