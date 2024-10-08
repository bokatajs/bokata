const { TokenizerId } = require('@bokata/lang-id');

class TokenizerMs extends TokenizerId {
  constructor(container, shouldTokenize) {
    super(container, shouldTokenize);
    this.name = 'tokenizer-ms';
  }
}

module.exports = TokenizerMs;
