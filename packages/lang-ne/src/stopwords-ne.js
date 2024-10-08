const { Stopwords } = require('@bokata/core');

class StopwordsNe extends Stopwords {
  constructor(container, words) {
    super(container);
    this.name = 'stopwords-ne';
    this.dictionary = {};
    const list = words || [];
    this.build(list);
  }
}

module.exports = StopwordsNe;
