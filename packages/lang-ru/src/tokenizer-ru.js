const { Tokenizer } = require('@bokata/core');

class TokenizerRu extends Tokenizer {
  constructor(container, shouldTokenize) {
    super(container, shouldTokenize);
    this.name = 'tokenizer-ru';
  }
}

module.exports = TokenizerRu;
