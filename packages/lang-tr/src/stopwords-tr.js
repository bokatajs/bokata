const { Stopwords } = require('@bokata/core');

class StopwordsTr extends Stopwords {
  constructor(container, words) {
    super(container);
    this.name = 'stopwords-tr';
    this.dictionary = {};
    const list = words || [];
    this.build(list);
  }
}

module.exports = StopwordsTr;
