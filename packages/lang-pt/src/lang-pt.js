const TokenizerPt = require('./tokenizer-pt');
const StemmerPt = require('./stemmer-pt');
const StopwordsPt = require('./stopwords-pt');
const NormalizerPt = require('./normalizer-pt');
const SentimentPt = require('./sentiment/sentiment_pt');
const registerTrigrams = require('./trigrams');

class LangPt {
  register(container) {
    container.use(TokenizerPt);
    container.use(StemmerPt);
    container.use(StopwordsPt);
    container.use(NormalizerPt);
    container.register('sentiment-pt', SentimentPt);
    registerTrigrams(container);
  }
}

module.exports = LangPt;
