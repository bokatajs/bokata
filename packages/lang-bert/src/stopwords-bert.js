const { Stopwords } = require('@bokata/core');

class StopwordsBert extends Stopwords {
  constructor(container, words) {
    super(container);
    this.name = 'stopwords-bert';
    this.dictionary = {};
    const list = words || [];
    this.build(list);
  }
}

module.exports = StopwordsBert;
