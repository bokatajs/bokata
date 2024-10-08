const { StopwordsId } = require('@bokata/lang-id');

class StopwordsMs extends StopwordsId {
  constructor(container, words) {
    super(container, words);
    this.name = 'stopwords-ms';
  }
}

module.exports = StopwordsMs;
