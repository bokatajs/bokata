const TokenizerPl = require('./tokenizer-pl');
const StemmerPl = require('./stemmer-pl');
const StopwordsPl = require('./stopwords-pl');
const NormalizerPl = require('./normalizer-pl');
const SentimentPl = require('./sentiment/sentiment_pl');
const registerTrigrams = require('./trigrams');

class LangPl {
  register(container) {
    container.use(TokenizerPl);
    container.use(StemmerPl);
    container.use(StopwordsPl);
    container.use(NormalizerPl);
    container.register('sentiment-pl', SentimentPl);
    registerTrigrams(container);
  }
}

module.exports = LangPl;
