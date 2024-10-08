const { Stopwords } = require('@bokata/core');

class StopwordsDe extends Stopwords {
  constructor(container, words) {
    super(container);
    this.name = 'stopwords-de';
    this.dictionary = {};
    const list = words || [];
    this.build(list);
  }
}

module.exports = StopwordsDe;
