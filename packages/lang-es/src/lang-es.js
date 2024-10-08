const TokenizerEs = require('./tokenizer-es');
const StemmerEs = require('./stemmer-es');
const StopwordsEs = require('./stopwords-es');
const NormalizerEs = require('./normalizer-es');
const SentimentEs = require('./sentiment/sentiment_es');
const registerTrigrams = require('./trigrams');

class LangEs {
  register(container) {
    container.use(TokenizerEs);
    container.use(StemmerEs);
    container.use(StopwordsEs);
    container.use(NormalizerEs);
    container.register('sentiment-es', SentimentEs);
    registerTrigrams(container);
  }
}

module.exports = LangEs;
