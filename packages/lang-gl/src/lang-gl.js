const TokenizerGl = require('./tokenizer-gl');
const StemmerGl = require('./stemmer-gl');
const StopwordsGl = require('./stopwords-gl');
const NormalizerGl = require('./normalizer-gl');
const SentimentGl = require('./sentiment/sentiment_gl');
const registerTrigrams = require('./trigrams');

class LangGl {
  register(container) {
    container.use(TokenizerGl);
    container.use(StemmerGl);
    container.use(StopwordsGl);
    container.use(NormalizerGl);
    container.register('sentiment-gl', SentimentGl);
    registerTrigrams(container);
  }
}

module.exports = LangGl;
