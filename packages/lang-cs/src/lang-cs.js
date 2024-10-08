const TokenizerCs = require('./tokenizer-cs');
const StemmerCs = require('./stemmer-cs');
const StopwordsCs = require('./stopwords-cs');
const NormalizerCs = require('./normalizer-cs');
const SentimentCs = require('./sentiment/sentiment_cs');
const registerTrigrams = require('./trigrams');

class LangCs {
  register(container) {
    container.use(TokenizerCs);
    container.use(StemmerCs);
    container.use(StopwordsCs);
    container.use(NormalizerCs);
    container.register('sentiment-cs', SentimentCs);
    registerTrigrams(container);
  }
}

module.exports = LangCs;
