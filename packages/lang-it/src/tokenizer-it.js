const { Tokenizer } = require('@bokata/core');

class TokenizerIt extends Tokenizer {
  constructor(container, shouldTokenize) {
    super(container, shouldTokenize);
    this.name = 'tokenizer-it';
  }
}

module.exports = TokenizerIt;
