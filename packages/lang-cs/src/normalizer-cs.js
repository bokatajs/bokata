const { Normalizer } = require('@bokata/core');

class NormalizerCs extends Normalizer {
  constructor(container) {
    super(container);
    this.name = 'normalizer-cs';
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

module.exports = NormalizerCs;
