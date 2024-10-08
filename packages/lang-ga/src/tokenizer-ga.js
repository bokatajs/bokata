const { Tokenizer } = require('@bokata/core');

class TokenizerGa extends Tokenizer {
  constructor(container, shouldTokenize) {
    super(container, shouldTokenize);
    this.name = 'tokenizer-ga';
  }
}

module.exports = TokenizerGa;
