const { Tokenizer } = require('@bokata/core');

class TokenizerDa extends Tokenizer {
  constructor(container, shouldNormalize) {
    super(container, shouldNormalize);
    this.name = 'tokenizer-da';
  }
}

module.exports = TokenizerDa;
