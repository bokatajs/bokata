const { Tokenizer } = require('@bokata/core');

class TokenizerTr extends Tokenizer {
  constructor(container, shouldTokenize) {
    super(container, shouldTokenize);
    this.name = 'tokenizer-tr';
  }
}

module.exports = TokenizerTr;
