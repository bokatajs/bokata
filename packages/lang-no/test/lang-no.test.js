const { Container } = require('@bokata/core');
const { LangNo } = require('../src');

describe('Language Norwegian', () => {
  describe('Use plugin', () => {
    test('Should register the classes', () => {
      const instance = new Container();
      instance.use(LangNo);
      const tokenizer = instance.get('tokenizer-no');
      expect(tokenizer.constructor.name).toEqual('TokenizerNo');
      const stemmer = instance.get('stemmer-no');
      expect(stemmer.constructor.name).toEqual('StemmerNo');
      const stopwords = instance.get('stopwords-no');
      expect(stopwords.constructor.name).toEqual('StopwordsNo');
      const normalizer = instance.get('normalizer-no');
      expect(normalizer.constructor.name).toEqual('NormalizerNo');
    });
  });
});
