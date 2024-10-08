const { StopwordsBert } = require('../src');

describe('Stopwords Bert', () => {
  describe('Constructor', () => {
    test('It should create a new instance', () => {
      const container = {};
      const stopwords = new StopwordsBert(container);
      expect(stopwords).toBeDefined();
      expect(stopwords.container).toBe(container);
      expect(stopwords.name).toEqual('stopwords-bert');
      expect(stopwords.dictionary).toEqual({});
    });

    test('A list of words can be provided', () => {
      const container = {};
      const stopwords = new StopwordsBert(container, ['stop', 'word']);
      expect(stopwords.dictionary).toEqual({ stop: true, word: true });
    });
  });
});
