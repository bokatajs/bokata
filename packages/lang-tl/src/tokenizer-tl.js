const { Tokenizer } = require('@bokata/core');

class TokenizerTl extends Tokenizer {
  constructor(container, shouldTokenize) {
    super(container, shouldTokenize);
    this.name = 'tokenizer-tl';
  }
}

module.exports = TokenizerTl;
