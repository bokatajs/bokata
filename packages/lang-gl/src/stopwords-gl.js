const { Stopwords } = require('@bokata/core');

class StopwordsGl extends Stopwords {
  constructor(container, words) {
    super(container);
    this.name = 'stopwords-gl';
    this.dictionary = {};
    const list = words || [];
    this.build(list);
  }
}

module.exports = StopwordsGl;
