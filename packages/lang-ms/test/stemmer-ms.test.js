const { StemmerMs } = require('../src');

describe('Stemmer', () => {
  describe('Constructor', () => {
    test('It should create a new instance', () => {
      const instance = new StemmerMs();
      expect(instance).toBeDefined();
    });
  });
});
