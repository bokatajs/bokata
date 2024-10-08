const { Stopwords } = require('@bokata/core');

class StopwordsSr extends Stopwords {
  constructor(container, words) {
    super(container);
    this.name = 'stopwords-sr';
    this.dictionary = {};
    const list = words || [];
    this.build(list);
  }
}

module.exports = StopwordsSr;
