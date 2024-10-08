const { Stopwords } = require('@bokata/core');

class StopwordsPl extends Stopwords {
  constructor(container, words) {
    super(container);
    this.name = 'stopwords-pl';
    this.dictionary = {};
    const list = words || [];
    this.build(list);
  }
}

module.exports = StopwordsPl;
