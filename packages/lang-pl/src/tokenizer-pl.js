const { Tokenizer } = require('@bokata/core');

class TokenizerPl extends Tokenizer {
  constructor(container, shouldNormalize) {
    super(container, shouldNormalize);
    this.name = 'tokenizer-pl';
  }

  innerTokenize(text) {
    return text.split(/[\s,.!?;:([\]'"¡¿)/]+/).filter((x) => x);
  }
}

module.exports = TokenizerPl;
