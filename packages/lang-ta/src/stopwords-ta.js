const { Stopwords } = require('@bokata/core');

class StopwordsTa extends Stopwords {
  constructor(container, words) {
    super(container);
    this.name = 'stopwords-ta';
    this.dictionary = {};
    const list = words || [];
    this.build(list);
  }
}

module.exports = StopwordsTa;
