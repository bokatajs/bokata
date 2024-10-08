const { Normalizer } = require('@bokata/core');

class NormalizerBert extends Normalizer {
  constructor(container) {
    super(container);
    this.name = 'normalizer-bert';
  }

  normalize(text) {
    return text.toLowerCase();
  }

  run(srcInput) {
    const input = srcInput;
    input.text = this.normalize(input.text, input);
    return input;
  }
}

module.exports = NormalizerBert;
