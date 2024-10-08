const TokenizerRu = require('./tokenizer-ru');
const StemmerRu = require('./stemmer-ru');
const StopwordsRu = require('./stopwords-ru');
const NormalizerRu = require('./normalizer-ru');
const SentimentRu = require('./sentiment/sentiment_ru');
const registerTrigrams = require('./trigrams');

class LangRu {
  register(container) {
    container.use(TokenizerRu);
    container.use(StemmerRu);
    container.use(StopwordsRu);
    container.use(NormalizerRu);
    container.register('sentiment-ru', SentimentRu);
    registerTrigrams(container);
  }
}

module.exports = LangRu;
