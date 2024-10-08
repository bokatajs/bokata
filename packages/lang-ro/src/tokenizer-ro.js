const { Tokenizer } = require('@bokata/core');

class TokenizerRo extends Tokenizer {
  constructor(container, shouldTokenize) {
    super(container, shouldTokenize);
    this.name = 'tokenizer-ro';
  }
}

module.exports = TokenizerRo;
