const TokenizerNl = require('./tokenizer-nl');
const StemmerNl = require('./stemmer-nl');
const StopwordsNl = require('./stopwords-nl');
const NormalizerNl = require('./normalizer-nl');
const SentimentNl = require('./sentiment/sentiment_nl');
const registerTrigrams = require('./trigrams');

class LangNl {
  register(container) {
    container.use(TokenizerNl);
    container.use(StemmerNl);
    container.use(StopwordsNl);
    container.use(NormalizerNl);
    container.register('sentiment-nl', SentimentNl);
    registerTrigrams(container);
  }
}

module.exports = LangNl;
