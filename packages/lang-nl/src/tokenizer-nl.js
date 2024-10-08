const { Tokenizer } = require('@bokata/core');

class TokenizerNl extends Tokenizer {
  constructor(container, shouldTokenize) {
    super(container, shouldTokenize);
    this.name = 'tokenizer-nl';
  }
}

module.exports = TokenizerNl;
