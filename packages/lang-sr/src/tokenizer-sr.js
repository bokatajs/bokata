const { Tokenizer } = require('@bokata/core');

class TokenizerSr extends Tokenizer {
  constructor(container, shouldTokenize) {
    super(container, shouldTokenize);
    this.name = 'tokenizer-sr';
  }
}

module.exports = TokenizerSr;
