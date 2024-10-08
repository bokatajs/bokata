const { Stopwords } = require('@bokata/core');

class StopwordsRo extends Stopwords {
  constructor(container, words) {
    super(container);
    this.name = 'stopwords-ro';
    this.dictionary = {};
    const list = words || [];
    this.build(list);
  }
}

module.exports = StopwordsRo;
