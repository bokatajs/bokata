const { Tokenizer } = require('@bokata/core');

class TokenizerSl extends Tokenizer {
  constructor(container, shouldTokenize) {
    super(container, shouldTokenize);
    this.name = 'tokenizer-sl';
  }
}

module.exports = TokenizerSl;
