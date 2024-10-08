const { Stopwords } = require('@bokata/core');

class StopwordsLt extends Stopwords {
  constructor(container, words) {
    super(container);
    this.name = 'stopwords-lt';
    this.dictionary = {};
    const list = words || [];
    this.build(list);
  }
}

module.exports = StopwordsLt;
