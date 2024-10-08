const { Tokenizer } = require('@bokata/core');

class TokenizerEl extends Tokenizer {
  constructor(container, shouldNormalize) {
    super(container, shouldNormalize);
    this.name = 'tokenizer-el';
  }
}

module.exports = TokenizerEl;
