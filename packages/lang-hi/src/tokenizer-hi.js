const { Tokenizer } = require('@bokata/core');

class TokenizerHi extends Tokenizer {
  constructor(container, shouldTokenize) {
    super(container, shouldTokenize);
    this.name = 'tokenizer-hi';
  }
}

module.exports = TokenizerHi;
