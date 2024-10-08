const { BaseStemmer } = require('@bokata/core');

class StemmerBert extends BaseStemmer {
  constructor(container) {
    super(container);
    this.name = 'stemmer-bert';
    this.removeAffixes = false;
  }

  activeFor(locale) {
    const conf = this.container.getConfiguration('bert');
    if ((conf ? conf.url : undefined) || process.env.BERT_ENDPOINT) {
      if (conf.avoid && conf.avoid.includes(locale)) {
        return false;
      }
      return true;
    }
    return false;
  }

  innerStem() {
    if (this.removeAffixes) {
      const current = this.getCurrent();
      this.setCurrent(current.startsWith('##') ? '' : current);
    }
  }
}

module.exports = StemmerBert;
