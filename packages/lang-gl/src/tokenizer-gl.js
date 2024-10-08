const { Tokenizer } = require('@bokata/core');

class TokenizerGl extends Tokenizer {
  constructor(container, shouldTokenize) {
    super(container, shouldTokenize);
    this.name = 'tokenizer-gl';
  }
}

module.exports = TokenizerGl;
