const { Tokenizer } = require('@bokata/core');

class TokenizerId extends Tokenizer {
  constructor(container, shouldTokenize) {
    super(container, shouldTokenize);
    this.name = 'tokenizer-id';
  }
}

module.exports = TokenizerId;
