const {
  Among,
  ArrToObj,
  BaseStemmer,
  Clonable,
  Container,
  defaultContainer,
  Normalizer,
  ObjToArr,
  Stemmer,
  Stopwords,
  Tokenizer,
  Timer,
  logger,
  MemoryStorage,
  uuid,
  Context,
} = require('@bokata/core');

const containerBootstrap = require('./container-bootstrap');
const dock = require('./dock');

const {
  hasUnicode,
  unicodeToArray,
  asciiToArray,
  stringToArray,
  compareWildcars,
  listFiles,
  loadEnv,
  listFilesAbsolute,
  getAbsolutePath,
} = require('./helper');

async function dockStart(settings, mustLoadEnv) {
  await dock.start(settings, mustLoadEnv);
  return dock;
}

module.exports = {
  Among,
  ArrToObj,
  BaseStemmer,
  containerBootstrap,
  Clonable,
  Container,
  defaultContainer,
  hasUnicode,
  unicodeToArray,
  asciiToArray,
  stringToArray,
  compareWildcars,
  getAbsolutePath,
  listFiles,
  listFilesAbsolute,
  loadEnv,
  Normalizer,
  ObjToArr,
  Stemmer,
  Stopwords,
  Tokenizer,
  Timer,
  logger,
  MemoryStorage,
  uuid,
  dock,
  Context,
  dockStart,
};
