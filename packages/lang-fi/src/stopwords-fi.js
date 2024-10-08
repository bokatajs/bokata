const { Stopwords } = require('@bokata/core');

class StopwordsFi extends Stopwords {
  constructor(container, words) {
    super(container);
    this.name = 'stopwords-fi';
    this.dictionary = {};
    const list = words || [];
    this.build(list);
  }
}

module.exports = StopwordsFi;
