const fs = require('fs');
const { MultiBertWordPieceTokenizer } = require('../src');

const fileNameEn = './packages/bert-tokenizer/dicts/vocab-en.txt';
const fileNameMulti = './packages/bert-tokenizer/dicts/vocab-multi.txt';

describe('Multi BERT word piece tokenizer', () => {
  describe('Constructor', () => {
    test('It should create a new instance', () => {
      const multi = new MultiBertWordPieceTokenizer();
      expect(multi).toBeDefined();
    });
  });

  describe('Define tokenizers', () => {
    test('Can be defined as array of locales', () => {
      const multi = new MultiBertWordPieceTokenizer({ fs });
      multi.loadTokenizersFromFile(['en', 'aa'], fileNameEn);
      multi.loadTokenizersFromFile('*', fileNameMulti);
      const tokenizerEn = multi.getTokenizer('en');
      const tokenizerAa = multi.getTokenizer('aa');
      const tokenizerEs = multi.getTokenizer('es');
      expect(tokenizerEn).toBeDefined();
      expect(tokenizerEn).toBe(tokenizerAa);
      expect(tokenizerEs).toBeDefined();
      expect(tokenizerEs).not.toBe(tokenizerEn);
    });
  });
});
