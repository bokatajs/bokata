const { Normalizer } = require('@bokata/core');

class NormalizerNl extends Normalizer {
  constructor(container) {
    super(container);
    this.name = 'normalizer-nl';
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

module.exports = NormalizerNl;
