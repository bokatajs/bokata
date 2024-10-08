const TokenizerSv = require('./tokenizer-sv');
const StemmerSv = require('./stemmer-sv');
const StopwordsSv = require('./stopwords-sv');
const NormalizerSv = require('./normalizer-sv');
const SentimentSv = require('./sentiment/sentiment_sv');
const registerTrigrams = require('./trigrams');

class LangSv {
  register(container) {
    container.use(TokenizerSv);
    container.use(StemmerSv);
    container.use(StopwordsSv);
    container.use(NormalizerSv);
    container.register('sentiment-sv', SentimentSv);
    registerTrigrams(container);
  }
}

module.exports = LangSv;
