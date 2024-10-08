const { Stopwords } = require('@bokata/core');

class StopwordsTh extends Stopwords {
  constructor(container, words) {
    super(container);
    this.name = 'stopwords-th';
    this.dictionary = {};
    const list = words || [];
    this.build(list);
  }
}

module.exports = StopwordsTh;
