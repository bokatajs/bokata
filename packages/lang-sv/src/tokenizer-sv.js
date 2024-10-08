const { Tokenizer } = require('@bokata/core');

class TokenizerSv extends Tokenizer {
  constructor(container, shouldTokenize) {
    super(container, shouldTokenize);
    this.name = 'tokenizer-sv';
  }
}

module.exports = TokenizerSv;
