const { Normalizer } = require('@bokata/core');
const { converters, fixCompositeSymbols } = require('./helper');

class NormalizerJa extends Normalizer {
  constructor(container) {
    super(container);
    this.name = 'normalizer-ja';
  }

  normalize(text) {
    let str = text.replace(/(..)々々/g, '$1$1').replace(/(.)々/g, '$1$1');
    str = converters.normalize(str);
    str = converters.fixFullwidthKana(str);
    str = fixCompositeSymbols(str);
    return str;
  }

  run(srcInput) {
    const input = srcInput;
    input.text = this.normalize(input.text, input);
    return input;
  }
}

module.exports = NormalizerJa;
