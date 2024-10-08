const { Stopwords } = require('@bokata/core');

class StopwordsUk extends Stopwords {
  constructor(container, words) {
    super(container);
    this.name = 'stopwords-uk';
    this.dictionary = {};
    const list = words || [];
    this.build(list);
  }
}

module.exports = StopwordsUk;
