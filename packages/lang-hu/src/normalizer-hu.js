const { Normalizer } = require('@bokata/core');

class NormalizerHu extends Normalizer {
  constructor(container) {
    super(container);
    this.name = 'normalizer-hu';
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

module.exports = NormalizerHu;
