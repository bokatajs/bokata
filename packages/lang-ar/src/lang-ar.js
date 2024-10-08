const StemmerAr = require('./stemmer-ar');
const TokenizerAr = require('./tokenizer-ar');
const StopwordsAr = require('./stopwords-ar');
const NormalizerAr = require('./normalizer-ar');
const SentimentAr = require('./sentiment/sentiment_ar');
const registerTrigrams = require('./trigrams');

class LangAr {
  register(container) {
    container.use(StemmerAr);
    container.use(TokenizerAr);
    container.use(StopwordsAr);
    container.use(NormalizerAr);
    container.register('sentiment-ar', SentimentAr);
    registerTrigrams(container);
  }
}

module.exports = LangAr;
