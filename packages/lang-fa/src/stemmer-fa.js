const { BaseStemmer } = require('@bokata/core');

class StemmerFa extends BaseStemmer {
  constructor(container) {
    super(container);
    this.name = 'stemmer-fa';
  }

  innerStem() {
    // empty
  }
}

module.exports = StemmerFa;
