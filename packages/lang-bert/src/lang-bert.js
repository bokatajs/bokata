const TokenizerBert = require('./tokenizer-bert');
const StemmerBert = require('./stemmer-bert');
const NormalizerBert = require('./normalizer-bert');

function registerBertForLanguage(container, locale) {
  const tokenizer = new TokenizerBert(container);
  tokenizer.name = `tokenizer-${locale}`;
  container.use(tokenizer);
  const stemmer = new StemmerBert(container);
  stemmer.name = `stemmer-${locale}`;
  container.use(stemmer);
  const normalizer = new NormalizerBert(container);
  normalizer.name = `normalizer-${locale}`;
  container.use(normalizer);
}

/**
 * Class for LangBert
 */
class LangBert {
  register(container) {
    container.use(new TokenizerBert(container));
    container.use(new StemmerBert(container));
    container.use(new NormalizerBert(container));
    const conf = container.getConfiguration('bert');
    if (conf && conf.languages) {
      for (let i = 0; i < conf.languages.length; i += 1) {
        registerBertForLanguage(container, conf.languages[i]);
      }
    }
  }
}

module.exports = LangBert;
