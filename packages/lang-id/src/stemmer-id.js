const { BaseStemmer } = require('@bokata/core');
const IndonesianStemmer = require('./indonesian-stemmer');

class StemmerId extends BaseStemmer {
  constructor(container) {
    super(container);
    this.name = 'stemmer-id';
    this.innerStemmer = new IndonesianStemmer();
  }

  innerStem() {
    this.setCurrent(this.innerStemmer.stemWord(this.getCurrent()));
  }
}

module.exports = StemmerId;
