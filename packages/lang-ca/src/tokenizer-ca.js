const { Tokenizer } = require('@bokata/core');

class TokenizerCa extends Tokenizer {
  constructor(container, shouldNormalize) {
    super(container, shouldNormalize);
    this.name = 'tokenizer-ca';
  }
}

module.exports = TokenizerCa;
