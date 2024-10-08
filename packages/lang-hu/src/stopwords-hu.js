const { Stopwords } = require('@bokata/core');

class StopwordsHu extends Stopwords {
  constructor(container, words) {
    super(container);
    this.name = 'stopwords-hu';
    this.dictionary = {};
    const list = words || [];
    this.build(list);
  }
}

module.exports = StopwordsHu;
