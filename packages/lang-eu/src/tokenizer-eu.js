const { Tokenizer } = require('@bokata/core');

class TokenizerEu extends Tokenizer {
  constructor(container, shouldTokenize) {
    super(container, shouldTokenize);
    this.name = 'tokenizer-eu';
  }
}

module.exports = TokenizerEu;
