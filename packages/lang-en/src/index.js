const { TokenizerEn, StemmerEn, StopwordsEn, NormalizerEn } = require('@bokata/lang-en-min');

const LangEn = require('./lang-en');
const SentimentEn = require('./sentiment/sentiment_en');

module.exports = {
  LangEn,
  StemmerEn,
  StopwordsEn,
  TokenizerEn,
  NormalizerEn,
  SentimentEn,
};
