const { Tokenizer } = require('@bokata/core');
const { MultiBertWordPieceTokenizer } = require('@bokata/bert-tokenizer');

class TokenizerBert extends Tokenizer {
  constructor(container, shouldNormalize) {
    super(container, shouldNormalize);
    this.multi = new MultiBertWordPieceTokenizer({
      fs: this.container && this.container.get ? this.container.get('fs') : undefined,
    });
    this.name = 'tokenizer-bert';
    this.removals = {
      '[CLS]': true,
      '[SEP]': true,
      '[PAD]': true,
      '[MASK]': true,
      ',': true,
      '?': true,
      '.': true,
      '!': true,
      ';': true,
      ':': true,
      '(': true,
      '[': true,
      ']': true,
      "'": true,
      '"': true,
      '¿': true,
      '¡': true,
      ')': true,
    };
    if (this.container && this.container.getConfiguration) {
      const conf = this.container.getConfiguration('bert');
      if (conf && conf.vocabs) {
        for (let i = 0; i < conf.vocabs.length; i += 1) {
          this.multi.loadTokenizersFromFile(conf.vocabs[i].locales, conf.vocabs[i].fileName, conf.vocabs[i].settings);
        }
      }
    }
  }

  activeFor(locale) {
    const conf = this.container.getConfiguration('bert');
    if ((conf ? conf.url : undefined) || process.env.BERT_ENDPOINT) {
      if (conf.avoid && conf.avoid.includes(locale)) {
        return false;
      }
      return true;
    }
    return false;
  }

  innerTokenizeMulti(text, locale = 'en') {
    const bertTokenizer = this.multi.getTokenizer(locale);
    if (bertTokenizer) {
      return bertTokenizer.encode(text);
    }
    return undefined;
  }

  async innerTokenize(text, settings = {}) {
    let result = this.innerTokenizeMulti(text, settings.locale);
    if (!result) {
      const conf = this.container.getConfiguration('bert');
      if (!conf || conf.useRemote === undefined || conf.useRemote) {
        const request = this.container.get('request');
        const postData = `{ "text": "${encodeURIComponent(text)}"}`;
        const url = (conf ? conf.url : undefined) || process.env.BERT_ENDPOINT;
        const options = {
          url,
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Content-Length': postData.length,
          },
          postData,
        };
        result = await request.get(options);
      }
    }
    if (!result.tokens || !result.tokens.filter) {
      return [];
    }
    const tokens = result.tokens.filter((x) => !this.removals[x]);
    return tokens;
  }
}

module.exports = TokenizerBert;
