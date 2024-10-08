const { Stopwords } = require('@bokata/core');

class StopwordsBn extends Stopwords {
  constructor(container, words) {
    super(container);
    this.name = 'stopwords-bn';
    this.dictionary = {};
    const list = words || [];
    this.build(list);
  }
}

module.exports = StopwordsBn;
