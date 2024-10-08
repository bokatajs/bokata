const { Tokenizer } = require('@bokata/core');

class TokenizerTa extends Tokenizer {
  constructor(container, shouldTokenize) {
    super(container, shouldTokenize);
    this.name = 'tokenizer-ta';
  }
}

module.exports = TokenizerTa;
