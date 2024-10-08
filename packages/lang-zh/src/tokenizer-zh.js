const { Tokenizer } = require('@bokata/core');
const dictionary = require('./dictionary');

class TokenizerZh extends Tokenizer {
  constructor(container, shouldTokenize) {
    super(container, shouldTokenize);
    this.name = 'tokenizer-zh';
  }

  innerTokenize(text) {
    return dictionary.segment(text);
  }
}

module.exports = TokenizerZh;
