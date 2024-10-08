const TokenizerEn = require('./tokenizer-en');
const StemmerEn = require('./stemmer-en');
const StopwordsEn = require('./stopwords-en');
const NormalizerEn = require('./normalizer-en');
const SentimentEn = require('./sentiment/sentiment_en');
const registerTrigrams = require('./trigrams');

class LangEn {
  register(container) {
    container.use(TokenizerEn);
    container.use(StemmerEn);
    container.use(StopwordsEn);
    container.use(NormalizerEn);
    container.register('sentiment-en', SentimentEn);
    registerTrigrams(container);
  }
}

module.exports = LangEn;
