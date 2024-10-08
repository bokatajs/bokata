const { Normalizer } = require('@bokata/core');

class NormalizerIt extends Normalizer {
  constructor(container) {
    super(container);
    this.name = 'normalizer-it';
  }

  normalize(text) {
    return text
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase();
  }

  run(srcInput) {
    const input = srcInput;
    input.text = this.normalize(input.text, input);
    return input;
  }
}

module.exports = NormalizerIt;
