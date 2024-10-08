const { NormalizerBert } = require('../src');

describe('Normalizer Bert', () => {
  describe('Constructor', () => {
    test('Constructor should be defined', () => {
      const container = {};
      const normalizer = new NormalizerBert(container);
      expect(normalizer).toBeDefined();
      expect(normalizer.container).toBe(container);
      expect(normalizer.name).toEqual('normalizer-bert');
    });
  });

  describe('Normalize', () => {
    test('Normalizer should pass to lower case', () => {
      const normalizer = new NormalizerBert();
      const input = 'This Is a NoRMaLiZeR';
      const expected = 'this is a normalizer';
      const actual = normalizer.normalize(input);
      expect(actual).toEqual(expected);
    });
  });

  describe('Run', () => {
    test('It should normalize text property', () => {
      const normalizer = new NormalizerBert();
      const input = { text: 'This Is a NoRMaLiZeR' };
      const expected = { text: 'this is a normalizer' };
      const actual = normalizer.run(input);
      expect(actual.text).toEqual(expected.text);
    });
  });
});
