const { Container } = require('@bokata/core');
const { LangGa } = require('../src');

describe('Language Irish', () => {
  describe('Use plugin', () => {
    test('Should register the classes', () => {
      const instance = new Container();
      instance.use(LangGa);
      const tokenizer = instance.get('tokenizer-ga');
      expect(tokenizer.constructor.name).toEqual('TokenizerGa');
      const stemmer = instance.get('stemmer-ga');
      expect(stemmer.constructor.name).toEqual('StemmerGa');
      const stopwords = instance.get('stopwords-ga');
      expect(stopwords.constructor.name).toEqual('StopwordsGa');
      const normalizer = instance.get('normalizer-ga');
      expect(normalizer.constructor.name).toEqual('NormalizerGa');
    });
  });
});
