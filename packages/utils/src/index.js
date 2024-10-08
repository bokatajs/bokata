const NGrams = require('./ngrams');
const TfIdf = require('./tfidf');
const MarkovChain = require('./markov');
const NlpAnalyzer = require('./nlp-analyzer');
const { cartesian, splitPattern, composeFromPattern, composeCorpus } = require('./pattern');
const ProgressBar = require('./progress-bar');
const softMax = require('./softmax');
const Downloader = require('./downloader');
const { getAbsolutePath } = require('./fs-extra');
const Lookup = require('./lookup');
const CorpusLookup = require('./corpus-lookup');
const Bench = require('./bench');
const { gibberishScore, isGibberish } = require('./is-gibberish');

module.exports = {
  NGrams,
  TfIdf,
  MarkovChain,
  NlpAnalyzer,
  cartesian,
  splitPattern,
  composeFromPattern,
  composeCorpus,
  ProgressBar,
  softMax,
  Downloader,
  getAbsolutePath,
  Lookup,
  CorpusLookup,
  Bench,
  gibberishScore,
  isGibberish,
};
