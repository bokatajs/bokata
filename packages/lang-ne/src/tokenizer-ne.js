const { Tokenizer } = require('@bokata/core');

class TokenizerNe extends Tokenizer {
  constructor(container, shouldTokenize) {
    super(container, shouldTokenize);
    this.name = 'tokenizer-ne';
  }
}

module.exports = TokenizerNe;
