const { Tokenizer } = require('@bokata/core');

class TokenizerNo extends Tokenizer {
  constructor(container, shouldTokenize) {
    super(container, shouldTokenize);
    this.name = 'tokenizer-no';
  }
}

module.exports = TokenizerNo;
