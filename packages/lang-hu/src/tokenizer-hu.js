const { Tokenizer } = require('@bokata/core');

class TokenizerHu extends Tokenizer {
  constructor(container, shouldTokenize) {
    super(container, shouldTokenize);
    this.name = 'tokenizer-hu';
  }
}

module.exports = TokenizerHu;
