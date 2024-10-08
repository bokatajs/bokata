const { Tokenizer } = require('@bokata/core');

class TokenizerLt extends Tokenizer {
  constructor(container, shouldTokenize) {
    super(container, shouldTokenize);
    this.name = 'tokenizer-lt';
  }
}

module.exports = TokenizerLt;
