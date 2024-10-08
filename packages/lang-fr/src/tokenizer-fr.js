const { Tokenizer } = require('@bokata/core');

class TokenizerFr extends Tokenizer {
  constructor(container, shouldTokenize) {
    super(container, shouldTokenize);
    this.name = 'tokenizer-fr';
  }

  innerTokenize(text) {
    const replaced = text.replace(/’/gi, "'");
    const slices = replaced.split(/[\s,.!?;:([\]’'"¡¿)/]+/).filter((x) => x);
    return slices;
  }
}

module.exports = TokenizerFr;
