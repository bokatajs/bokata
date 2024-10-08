const fs = require('fs');
const path = require('path');
const { QnaImporter } = require('../src');

describe('QnA Importer', () => {
  describe('constructor', () => {
    it('Should create an instance', () => {
      const instance = new QnaImporter();
      expect(instance).toBeDefined();
    });
  });

  describe('Transform', () => {
    it('Should transform a qna into a corpus', () => {
      const content = fs.readFileSync(path.join(__dirname, 'qna.tsv'), 'utf8');
      const instance = new QnaImporter();
      const corpus = instance.transform(content, { locale: 'en' })[0];
      expect(corpus).toBeDefined();
      expect(corpus.name).toEqual('corpus_en');
      expect(corpus.locale).toEqual('en');
      expect(corpus.data).toHaveLength(90);
    });
  });
});
