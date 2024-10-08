const { Container } = require('@bokata/core');
const { LangHu } = require('../src');

describe('Language Hungarian', () => {
  describe('Use plugin', () => {
    test('Should register the classes', () => {
      const instance = new Container();
      instance.use(LangHu);
      const tokenizer = instance.get('tokenizer-hu');
      expect(tokenizer.constructor.name).toEqual('TokenizerHu');
      const stemmer = instance.get('stemmer-hu');
      expect(stemmer.constructor.name).toEqual('StemmerHu');
      const stopwords = instance.get('stopwords-hu');
      expect(stopwords.constructor.name).toEqual('StopwordsHu');
      const normalizer = instance.get('normalizer-hu');
      expect(normalizer.constructor.name).toEqual('NormalizerHu');
    });
  });
});
