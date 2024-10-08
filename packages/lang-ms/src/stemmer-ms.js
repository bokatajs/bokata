const { StemmerId } = require('@bokata/lang-id');

class StemmerMs extends StemmerId {
  constructor(container) {
    super(container);
    this.name = 'stemmer-ms';
  }
}

module.exports = StemmerMs;
