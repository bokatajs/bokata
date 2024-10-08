const { Tokenizer } = require('@bokata/core');

class TokenizerBn extends Tokenizer {
  constructor(container, shouldNormalize) {
    super(container, shouldNormalize);
    this.name = 'tokenizer-bn';
  }

  innerTokenize(text) {
    return text.split(/[\s,.!?;:([\]'"¡¿।-]+/).filter((x) => x);
  }
}

module.exports = TokenizerBn;
