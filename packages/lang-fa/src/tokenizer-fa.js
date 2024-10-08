const { Tokenizer } = require('@bokata/core');

class TokenizerFa extends Tokenizer {
  constructor(container, shouldTokenize) {
    super(container, shouldTokenize);
    this.name = 'tokenizer-fa';
  }
}

module.exports = TokenizerFa;
