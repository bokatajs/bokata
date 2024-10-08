const { Tokenizer } = require('@bokata/core');

class TokenizerUk extends Tokenizer {
  constructor(container, shouldTokenize) {
    super(container, shouldTokenize);
    this.name = 'tokenizer-uk';
  }
}

module.exports = TokenizerUk;
