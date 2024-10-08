const { Tokenizer } = require('@bokata/core');

class TokenizerPt extends Tokenizer {
  constructor(container, shouldTokenize) {
    super(container, shouldTokenize);
    this.name = 'tokenizer-pt';
  }

  innerTokenize(text) {
    return text.split(/[\s,.!?;:([\]'"¡¿)/]+|[-'](?=[a-zA-Z])/).filter((x) => x);
  }
}

module.exports = TokenizerPt;
