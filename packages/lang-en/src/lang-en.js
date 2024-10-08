const { TokenizerEn, StemmerEn, StopwordsEn, NormalizerEn, registerTrigrams } = require('@bokata/lang-en-min');
const SentimentEn = require('./sentiment/sentiment_en');

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
