const TokenizerIt = require('./tokenizer-it');
const StemmerIt = require('./stemmer-it');
const StopwordsIt = require('./stopwords-it');
const NormalizerIt = require('./normalizer-it');
const SentimentIt = require('./sentiment/sentiment_it');
const registerTrigrams = require('./trigrams');

class LangIt {
  register(container) {
    container.use(TokenizerIt);
    container.use(StemmerIt);
    container.use(StopwordsIt);
    container.use(NormalizerIt);
    container.register('sentiment-it', SentimentIt);
    registerTrigrams(container);
  }
}

module.exports = LangIt;
