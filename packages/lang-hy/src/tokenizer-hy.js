const { Tokenizer } = require('@bokata/core');

class TokenizerHy extends Tokenizer {
  constructor(container, shouldTokenize) {
    super(container, shouldTokenize);
    this.name = 'tokenizer-hy';
  }
}

module.exports = TokenizerHy;
