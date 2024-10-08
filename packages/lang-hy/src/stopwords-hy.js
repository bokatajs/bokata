const { Stopwords } = require('@bokata/core');

class StopwordsHy extends Stopwords {
  constructor(container, words) {
    super(container);
    this.name = 'stopwords-hy';
    this.dictionary = {};
    const list = words || [];
    this.build(list);
  }
}

module.exports = StopwordsHy;
