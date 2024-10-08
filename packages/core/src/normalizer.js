const { defaultContainer } = require('./container');

class Normalizer {
  constructor(container = defaultContainer) {
    this.container = container.container || container;
    this.name = 'normalize';
  }

  normalize(text) {
    return text
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase();
  }

  run(srcInput) {
    const input = srcInput;
    const locale = input.locale || 'en';
    const normalizer = this.container.get(`normalizer-${locale}`) || this;
    input.text = normalizer.normalize(input.text, input);
    return input;
  }
}

module.exports = Normalizer;
