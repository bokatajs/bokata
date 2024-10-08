const { Tokenizer } = require('@bokata/core');

class TokenizerCs extends Tokenizer {
  constructor(container, shouldNormalize) {
    super(container, shouldNormalize);
    this.name = 'tokenizer-cs';
  }
}

module.exports = TokenizerCs;
