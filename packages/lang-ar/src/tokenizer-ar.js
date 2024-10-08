const { Tokenizer } = require('@bokata/core');

class TokenizerAr extends Tokenizer {
  constructor(container, shouldNormalize) {
    super(container, shouldNormalize);
    this.name = 'tokenizer-ar';
  }
}

module.exports = TokenizerAr;
