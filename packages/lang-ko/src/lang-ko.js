const TokenizerKo = require('./tokenizer-ko');
const StemmerKo = require('./stemmer-ko');
const StopwordsKo = require('./stopwords-ko');
const NormalizerKo = require('./normalizer-ko');
const SentimentKo = require('./sentiment/sentiment_ko');

class LangKo {
  register(container) {
    container.use(TokenizerKo);
    container.use(StemmerKo);
    container.use(StopwordsKo);
    container.use(NormalizerKo);
    container.register('sentiment-ko', SentimentKo);
  }
}

module.exports = LangKo;
