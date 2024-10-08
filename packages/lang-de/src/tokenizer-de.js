const { Tokenizer } = require('@bokata/core');

class TokenizerDe extends Tokenizer {
  constructor(container, shouldNormalize) {
    super(container, shouldNormalize);
    this.name = 'tokenizer-de';
  }
}

module.exports = TokenizerDe;
