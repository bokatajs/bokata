const { StemmerId } = require('../src');

describe('Stemmer', () => {
  describe('Constructor', () => {
    test('It should create a new instance', () => {
      const instance = new StemmerId();
      expect(instance).toBeDefined();
    });
  });
});
