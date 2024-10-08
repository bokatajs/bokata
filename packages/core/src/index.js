const Among = require('./among');
const ArrToObj = require('./arr-to-obj');
const BaseStemmer = require('./base-stemmer');
const containerBootstrap = require('./container-bootstrap');
const Clonable = require('./clonable');
const { Container, defaultContainer } = require('./container');
const Normalizer = require('./normalizer');
const ObjToArr = require('./obj-to-arr');
const Stemmer = require('./stemmer');
const Stopwords = require('./stopwords');
const Tokenizer = require('./tokenizer');
const Timer = require('./timer');
const logger = require('./logger');
const { hasUnicode, unicodeToArray, asciiToArray, stringToArray, compareWildcars, loadEnv } = require('./helper');
const MemoryStorage = require('./memory-storage');
const uuid = require('./uuid');
const dock = require('./dock');
const Context = require('./context');

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
