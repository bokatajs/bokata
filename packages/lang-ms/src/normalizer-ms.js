const { NormalizerId } = require('@bokata/lang-id');

class NormalizerMs extends NormalizerId {
  constructor(container) {
    super(container);
    this.name = 'normalizer-ms';
  }
}

module.exports = NormalizerMs;
