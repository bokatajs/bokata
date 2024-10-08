const { Stopwords } = require('@bokata/core');

class StopwordsTl extends Stopwords {
  constructor(container, words) {
    super(container);
    this.name = 'stopwords-tl';
    this.dictionary = {};
    const list = words || [];
    this.build(list);
  }
}

module.exports = StopwordsTl;
