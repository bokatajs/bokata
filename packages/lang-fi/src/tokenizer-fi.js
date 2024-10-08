const { Tokenizer } = require('@bokata/core');

class TokenizerFi extends Tokenizer {
  constructor(container, shouldTokenize) {
    super(container, shouldTokenize);
    this.name = 'tokenizer-fi';
  }
}

module.exports = TokenizerFi;
