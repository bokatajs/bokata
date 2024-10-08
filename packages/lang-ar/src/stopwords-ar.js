const { Stopwords } = require('@bokata/core');

class StopwordsAr extends Stopwords {
  constructor(container, words) {
    super(container);
    this.name = 'stopwords-ar';
    this.dictionary = {};
    const list = words || [];
    this.build(list);
  }
}

module.exports = StopwordsAr;
