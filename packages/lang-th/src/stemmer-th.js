const { BaseStemmer } = require('@bokata/core');

class StemmerTh extends BaseStemmer {
  constructor(container) {
    super(container);
    this.name = 'stemmer-th';
  }

  innerStem() {
    // do nothing
  }
}

module.exports = StemmerTh;
