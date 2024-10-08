const { Stopwords } = require('@bokata/core');

class StopwordsKo extends Stopwords {
  constructor(container, words) {
    super(container);
    this.name = 'stopwords-ko';
    this.dictionary = {};
    const list = words || [];
    this.build(list);
  }
}

module.exports = StopwordsKo;
