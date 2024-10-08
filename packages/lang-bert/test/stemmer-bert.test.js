const { StemmerBert } = require('../src');

describe('Stemmer Bert', () => {
  describe('Constructor', () => {
    test('It should create a new instance', () => {
      const container = {};
      const stemmer = new StemmerBert(container);
      expect(stemmer).toBeDefined();
      expect(stemmer.container).toBe(container);
      expect(stemmer.name).toEqual('stemmer-bert');
      expect(stemmer.removeAffixes).toBeFalsy();
    });
  });

  describe('Stem', () => {
    test('It should return the tokens', () => {
      const stemmer = new StemmerBert();
      const input = ['this', 'should', 'be', 'token', '##ized'];
      const actual = stemmer.stem(input);
      expect(actual).toEqual(input);
    });

    test('It can remove affixes', () => {
      const stemmer = new StemmerBert();
      stemmer.removeAffixes = true;
      const input = ['this', 'should', 'be', 'token', '##ized'];
      const expected = ['this', 'should', 'be', 'token'];
      const actual = stemmer.stem(input);
      expect(actual).toEqual(expected);
    });
  });
});
