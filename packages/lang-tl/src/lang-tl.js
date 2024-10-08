const TokenizerTl = require('./tokenizer-tl');
const StemmerTl = require('./stemmer-tl');
const StopwordsTl = require('./stopwords-tl');
const NormalizerTl = require('./normalizer-tl');
const SentimentTl = require('./sentiment/sentiment_tl');
const registerTrigrams = require('./trigrams');

class LangTl {
  register(container) {
    container.use(TokenizerTl);
    container.use(StemmerTl);
    container.use(StopwordsTl);
    container.use(NormalizerTl);
    container.register('sentiment-tl', SentimentTl);
    registerTrigrams(container);
  }
}

module.exports = LangTl;
