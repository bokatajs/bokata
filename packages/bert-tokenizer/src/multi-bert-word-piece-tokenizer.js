const fs = require('fs');
const BertWordPieceTokenizer = require('./bert-word-piece-tokenizer');

class MultiBertWordPieceTokenizer {
  constructor(settings = {}) {
    this.fs = settings.fs || fs;
    this.tokenizers = {};
  }

  loadTokenizers(locales, vocabContent, settings = {}) {
    const tokenizer = new BertWordPieceTokenizer({ ...settings, vocabContent });
    if (Array.isArray(locales)) {
      for (let i = 0; i < locales.length; i += 1) {
        this.tokenizers[locales[i]] = tokenizer;
      }
    } else {
      this.tokenizers[locales] = tokenizer;
    }
  }

  loadTokenizersFromFile(locales, fileName, settings = {}) {
    if (!this.fs) {
      throw new Error('No fs defined');
    }
    const vocabContent = this.fs.readFileSync(fileName, 'utf-8');
    if (settings.lowercase === undefined) {
      const lowerName = fileName.toLowerCase();
      if (lowerName.includes('uncased')) {
        settings.lowercase = true;
      } else if (lowerName.includes('cased')) {
        settings.lowercase = false;
      }
    }
    this.loadTokenizers(locales, vocabContent, settings);
  }

  getTokenizer(locale) {
    if (this.tokenizers[locale]) {
      return this.tokenizers[locale];
    }
    if (this.tokenizers['*']) {
      return this.tokenizers['*'];
    }
    return undefined;
  }
}

module.exports = MultiBertWordPieceTokenizer;
