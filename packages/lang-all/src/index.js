const { LangAr, NormalizerAr, SentimentAr, StemmerAr, StopwordsAr, TokenizerAr } = require('@bokata/lang-ar');
const { LangBn, NormalizerBn, SentimentBn, StemmerBn, StopwordsBn, TokenizerBn } = require('@bokata/lang-bn');
const { LangCa, NormalizerCa, SentimentCa, StemmerCa, StopwordsCa, TokenizerCa } = require('@bokata/lang-ca');
const { LangCs, NormalizerCs, SentimentCs, StemmerCs, StopwordsCs, TokenizerCs } = require('@bokata/lang-cs');
const { LangDa, NormalizerDa, SentimentDa, StemmerDa, StopwordsDa, TokenizerDa } = require('@bokata/lang-da');
const { LangDe, NormalizerDe, SentimentDe, StemmerDe, StopwordsDe, TokenizerDe } = require('@bokata/lang-de');
const { LangEl, NormalizerEl, SentimentEl, StemmerEl, StopwordsEl, TokenizerEl } = require('@bokata/lang-el');
const { LangEn, NormalizerEn, SentimentEn, StemmerEn, StopwordsEn, TokenizerEn } = require('@bokata/lang-en');
const { LangEs, NormalizerEs, SentimentEs, StemmerEs, StopwordsEs, TokenizerEs } = require('@bokata/lang-es');
const { LangEu, NormalizerEu, SentimentEu, StemmerEu, StopwordsEu, TokenizerEu } = require('@bokata/lang-eu');
const { LangFa, NormalizerFa, SentimentFa, StemmerFa, StopwordsFa, TokenizerFa } = require('@bokata/lang-fa');
const { LangFi, NormalizerFi, SentimentFi, StemmerFi, StopwordsFi, TokenizerFi } = require('@bokata/lang-fi');
const { LangFr, NormalizerFr, SentimentFr, StemmerFr, StopwordsFr, TokenizerFr } = require('@bokata/lang-fr');
const { LangGa, NormalizerGa, SentimentGa, StemmerGa, StopwordsGa, TokenizerGa } = require('@bokata/lang-ga');
const { LangGl, NormalizerGl, SentimentGl, StemmerGl, StopwordsGl, TokenizerGl } = require('@bokata/lang-gl');
const { LangHi, NormalizerHi, SentimentHi, StemmerHi, StopwordsHi, TokenizerHi } = require('@bokata/lang-hi');
const { LangHu, NormalizerHu, SentimentHu, StemmerHu, StopwordsHu, TokenizerHu } = require('@bokata/lang-hu');
const { LangHy, NormalizerHy, SentimentHy, StemmerHy, StopwordsHy, TokenizerHy } = require('@bokata/lang-hy');
const { LangId, NormalizerId, SentimentId, StemmerId, StopwordsId, TokenizerId } = require('@bokata/lang-id');
const { LangIt, NormalizerIt, SentimentIt, StemmerIt, StopwordsIt, TokenizerIt } = require('@bokata/lang-it');
const { LangJa, NormalizerJa, SentimentJa, StemmerJa, StopwordsJa, TokenizerJa } = require('@bokata/lang-ja');
const { LangKo, NormalizerKo, SentimentKo, StemmerKo, StopwordsKo, TokenizerKo } = require('@bokata/lang-ko');
const { LangLt, NormalizerLt, SentimentLt, StemmerLt, StopwordsLt, TokenizerLt } = require('@bokata/lang-lt');
const { LangMs, NormalizerMs, SentimentMs, StemmerMs, StopwordsMs, TokenizerMs } = require('@bokata/lang-ms');
const { LangNe, NormalizerNe, SentimentNe, StemmerNe, StopwordsNe, TokenizerNe } = require('@bokata/lang-ne');
const { LangNl, NormalizerNl, SentimentNl, StemmerNl, StopwordsNl, TokenizerNl } = require('@bokata/lang-nl');
const { LangNo, NormalizerNo, SentimentNo, StemmerNo, StopwordsNo, TokenizerNo } = require('@bokata/lang-no');
const { LangPl, NormalizerPl, SentimentPl, StemmerPl, StopwordsPl, TokenizerPl } = require('@bokata/lang-pl');
const { LangPt, NormalizerPt, SentimentPt, StemmerPt, StopwordsPt, TokenizerPt } = require('@bokata/lang-pt');
const { LangRo, NormalizerRo, SentimentRo, StemmerRo, StopwordsRo, TokenizerRo } = require('@bokata/lang-ro');
const { LangRu, NormalizerRu, SentimentRu, StemmerRu, StopwordsRu, TokenizerRu } = require('@bokata/lang-ru');
const { LangSl, NormalizerSl, SentimentSl, StemmerSl, StopwordsSl, TokenizerSl } = require('@bokata/lang-sl');
const { LangSr, NormalizerSr, SentimentSr, StemmerSr, StopwordsSr, TokenizerSr } = require('@bokata/lang-sr');
const { LangSv, NormalizerSv, SentimentSv, StemmerSv, StopwordsSv, TokenizerSv } = require('@bokata/lang-sv');
const { LangTa, NormalizerTa, SentimentTa, StemmerTa, StopwordsTa, TokenizerTa } = require('@bokata/lang-ta');
const { LangTh, NormalizerTh, SentimentTh, StemmerTh, StopwordsTh, TokenizerTh } = require('@bokata/lang-th');
const { LangTl, NormalizerTl, SentimentTl, StemmerTl, StopwordsTl, TokenizerTl } = require('@bokata/lang-tl');
const { LangTr, NormalizerTr, SentimentTr, StemmerTr, StopwordsTr, TokenizerTr } = require('@bokata/lang-tr');
const { LangUk, NormalizerUk, SentimentUk, StemmerUk, StopwordsUk, TokenizerUk } = require('@bokata/lang-uk');
const { LangZh, NormalizerZh, SentimentZh, StemmerZh, StopwordsZh, TokenizerZh } = require('@bokata/lang-zh');
const LangAll = require('./lang-all');

const {
  langDict,
  getNormalizer,
  getTokenizer,
  getStemmer,
  getStopwords,
  getSentiment,
  normalize,
  tokenize,
  stem,
  removeStopwords,
  dict,
  bow,
} = require('./lang-functions');

module.exports = {
  LangAll,

  LangAr,
  NormalizerAr,
  SentimentAr,
  StemmerAr,
  StopwordsAr,
  TokenizerAr,

  LangBn,
  NormalizerBn,
  SentimentBn,
  StemmerBn,
  StopwordsBn,
  TokenizerBn,

  LangCa,
  NormalizerCa,
  SentimentCa,
  StemmerCa,
  StopwordsCa,
  TokenizerCa,

  LangCs,
  NormalizerCs,
  SentimentCs,
  StemmerCs,
  StopwordsCs,
  TokenizerCs,

  LangDa,
  NormalizerDa,
  SentimentDa,
  StemmerDa,
  StopwordsDa,
  TokenizerDa,

  LangDe,
  NormalizerDe,
  SentimentDe,
  StemmerDe,
  StopwordsDe,
  TokenizerDe,

  LangEl,
  NormalizerEl,
  SentimentEl,
  StemmerEl,
  StopwordsEl,
  TokenizerEl,

  LangEn,
  NormalizerEn,
  SentimentEn,
  StemmerEn,
  StopwordsEn,
  TokenizerEn,

  LangEs,
  NormalizerEs,
  SentimentEs,
  StemmerEs,
  StopwordsEs,
  TokenizerEs,

  LangEu,
  NormalizerEu,
  SentimentEu,
  StemmerEu,
  StopwordsEu,
  TokenizerEu,

  LangFa,
  NormalizerFa,
  SentimentFa,
  StemmerFa,
  StopwordsFa,
  TokenizerFa,

  LangFi,
  NormalizerFi,
  SentimentFi,
  StemmerFi,
  StopwordsFi,
  TokenizerFi,

  LangFr,
  NormalizerFr,
  SentimentFr,
  StemmerFr,
  StopwordsFr,
  TokenizerFr,

  LangGa,
  NormalizerGa,
  SentimentGa,
  StemmerGa,
  StopwordsGa,
  TokenizerGa,

  LangGl,
  NormalizerGl,
  SentimentGl,
  StemmerGl,
  StopwordsGl,
  TokenizerGl,

  LangHi,
  NormalizerHi,
  SentimentHi,
  StemmerHi,
  StopwordsHi,
  TokenizerHi,

  LangHu,
  NormalizerHu,
  SentimentHu,
  StemmerHu,
  StopwordsHu,
  TokenizerHu,

  LangHy,
  NormalizerHy,
  SentimentHy,
  StemmerHy,
  StopwordsHy,
  TokenizerHy,

  LangIt,
  NormalizerIt,
  SentimentIt,
  StemmerIt,
  StopwordsIt,
  TokenizerIt,

  LangId,
  NormalizerId,
  SentimentId,
  StemmerId,
  StopwordsId,
  TokenizerId,

  LangJa,
  NormalizerJa,
  SentimentJa,
  StemmerJa,
  StopwordsJa,
  TokenizerJa,

  LangKo,
  NormalizerKo,
  SentimentKo,
  StemmerKo,
  StopwordsKo,
  TokenizerKo,

  LangLt,
  NormalizerLt,
  SentimentLt,
  StemmerLt,
  StopwordsLt,
  TokenizerLt,

  LangMs,
  NormalizerMs,
  SentimentMs,
  StemmerMs,
  StopwordsMs,
  TokenizerMs,

  LangNe,
  NormalizerNe,
  SentimentNe,
  StemmerNe,
  StopwordsNe,
  TokenizerNe,

  LangNl,
  NormalizerNl,
  SentimentNl,
  StemmerNl,
  StopwordsNl,
  TokenizerNl,

  LangNo,
  NormalizerNo,
  SentimentNo,
  StemmerNo,
  StopwordsNo,
  TokenizerNo,

  LangPl,
  NormalizerPl,
  SentimentPl,
  StemmerPl,
  StopwordsPl,
  TokenizerPl,

  LangPt,
  NormalizerPt,
  SentimentPt,
  StemmerPt,
  StopwordsPt,
  TokenizerPt,

  LangRo,
  NormalizerRo,
  SentimentRo,
  StemmerRo,
  StopwordsRo,
  TokenizerRo,

  LangRu,
  NormalizerRu,
  SentimentRu,
  StemmerRu,
  StopwordsRu,
  TokenizerRu,

  LangSl,
  NormalizerSl,
  SentimentSl,
  StemmerSl,
  StopwordsSl,
  TokenizerSl,

  LangSr,
  NormalizerSr,
  SentimentSr,
  StemmerSr,
  StopwordsSr,
  TokenizerSr,

  LangSv,
  NormalizerSv,
  SentimentSv,
  StemmerSv,
  StopwordsSv,
  TokenizerSv,

  LangTa,
  NormalizerTa,
  SentimentTa,
  StemmerTa,
  StopwordsTa,
  TokenizerTa,

  LangTh,
  NormalizerTh,
  SentimentTh,
  StemmerTh,
  StopwordsTh,
  TokenizerTh,

  LangTl,
  NormalizerTl,
  SentimentTl,
  StemmerTl,
  StopwordsTl,
  TokenizerTl,

  LangTr,
  NormalizerTr,
  SentimentTr,
  StemmerTr,
  StopwordsTr,
  TokenizerTr,

  LangUk,
  NormalizerUk,
  SentimentUk,
  StemmerUk,
  StopwordsUk,
  TokenizerUk,

  LangZh,
  NormalizerZh,
  SentimentZh,
  StemmerZh,
  StopwordsZh,
  TokenizerZh,

  langDict,
  getNormalizer,
  getTokenizer,
  getStemmer,
  getStopwords,
  getSentiment,
  normalize,
  tokenize,
  stem,
  removeStopwords,
  dict,
  bow,
};
