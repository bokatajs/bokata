const { Tokenizer } = require('@bokata/core');

class TokenizerEs extends Tokenizer {
  constructor(container, shouldNormalize) {
    super(container, shouldNormalize);
    this.name = 'tokenizer-es';
  }

  innerTokenize(text) {
    return text.split(/[\s,.!?;:([\]'"¡¿)/]+/).filter((x) => x);
  }
}

module.exports = TokenizerEs;
