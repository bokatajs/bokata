const { Stopwords } = require('@bokata/core');

class StopwordsDa extends Stopwords {
  constructor(container, words) {
    super(container);
    this.name = 'stopwords-da';
    this.dictionary = {};
    const list = words || [];
    this.build(list);
  }
}

module.exports = StopwordsDa;
