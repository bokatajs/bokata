const { Normalizer } = require('@bokata/core');

class NormalizerKo extends Normalizer {
  constructor(container) {
    super(container);
    this.name = 'normalizer-ko';
  }

  normalize(text) {
    return text.replace(/까?/g, '').toLowerCase();
  }

  run(srcInput) {
    const input = srcInput;
    input.text = this.normalize(input.text, input);
    return input;
  }
}

module.exports = NormalizerKo;
