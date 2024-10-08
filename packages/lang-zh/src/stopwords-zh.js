const { Stopwords } = require('@bokata/core');

class StopwordsZh extends Stopwords {
  constructor(container, words) {
    super(container);
    this.name = 'stopwords-zh';
    this.dictionary = {};
    const list = words || [];
    this.build(list);
  }
}

module.exports = StopwordsZh;
