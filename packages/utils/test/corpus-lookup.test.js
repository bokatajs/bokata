const { CorpusLookup } = require('../src');

const corpus = {
  data: [
    {
      intent: 'first',
      utterances: ['a b c', 'c d e'],
      tests: ['c b d'],
    },
    {
      intent: 'second',
      utterances: ['b f g', 'a f g'],
      tests: ['e f g'],
    },
  ],
};

const stemmer = {
  tokenizeAndStem: (str) => str.split(' '),
};

describe('Corpus Lookup', () => {
  describe('Constructor', () => {
    test('It should create a new instance', () => {
      const lookup = new CorpusLookup();
      expect(lookup).toBeDefined();
    });
    test('Data and stemmer can be provided', () => {
      const lookup = new CorpusLookup(corpus, stemmer);
      const expected = [
        {
          input: new Float32Array([1, 1, 1, 0, 0, 0, 0]),
          output: new Float32Array([1, 0]),
        },
        {
          input: new Float32Array([0, 0, 1, 1, 1, 0, 0]),
          output: new Float32Array([1, 0]),
        },
        {
          input: new Float32Array([0, 1, 0, 0, 0, 1, 1]),
          output: new Float32Array([0, 1]),
        },
        {
          input: new Float32Array([1, 0, 0, 0, 0, 1, 1]),
          output: new Float32Array([0, 1]),
        },
      ];
      expect(lookup).toBeDefined();
      expect(lookup.trainData).toBeDefined();
      expect(lookup.trainVectors).toBeDefined();
      expect(lookup.trainVectors).toEqual(expected);
    });
    test('Data can be provided as array', () => {
      const lookup = new CorpusLookup(corpus.data, stemmer);
      const expected = [
        {
          input: new Float32Array([1, 1, 1, 0, 0, 0, 0]),
          output: new Float32Array([1, 0]),
        },
        {
          input: new Float32Array([0, 0, 1, 1, 1, 0, 0]),
          output: new Float32Array([1, 0]),
        },
        {
          input: new Float32Array([0, 1, 0, 0, 0, 1, 1]),
          output: new Float32Array([0, 1]),
        },
        {
          input: new Float32Array([1, 0, 0, 0, 0, 1, 1]),
          output: new Float32Array([0, 1]),
        },
      ];
      expect(lookup).toBeDefined();
      expect(lookup.trainData).toBeDefined();
      expect(lookup.trainVectors).toBeDefined();
      expect(lookup.trainVectors).toEqual(expected);
    });
    test('It can generate objects instead of vectors', () => {
      const lookup = new CorpusLookup(corpus, stemmer, false);
      const expected = [
        {
          input: {
            data: { 0: 1, 1: 1, 2: 1 },
            keys: ['0', '1', '2'],
          },
          output: { 0: 1 },
        },
        {
          input: {
            data: { 2: 1, 3: 1, 4: 1 },
            keys: ['2', '3', '4'],
          },
          output: { 0: 1 },
        },
        {
          input: {
            data: { 1: 1, 5: 1, 6: 1 },
            keys: ['1', '5', '6'],
          },
          output: { 1: 1 },
        },
        {
          input: {
            data: { 0: 1, 5: 1, 6: 1 },
            keys: ['0', '5', '6'],
          },
          output: { 1: 1 },
        },
      ];
      expect(lookup).toBeDefined();
      expect(lookup.trainData).toBeDefined();
      expect(lookup.trainVectors).toBeUndefined();
      expect(lookup.trainObjects).toBeDefined();
      expect(lookup.trainObjects).toEqual(expected);
    });
  });

  describe('Input to Vector', () => {
    test('It can transform an input to a vector', () => {
      const lookup = new CorpusLookup(corpus, stemmer);
      const actual = lookup.inputToVector('a c e h');
      const expected = new Float32Array([1, 0, 1, 0, 1, 0, 0]);
      expect(actual).toEqual(expected);
    });
  });

  describe('Input to Object', () => {
    test('It can transform an input to an object', () => {
      const lookup = new CorpusLookup(corpus, stemmer);
      const actual = lookup.inputToObj('a c e h');
      const expected = {
        data: { 0: 1, 2: 1, 4: 1 },
        keys: ['0', '2', '4'],
      };
      expect(actual).toEqual(expected);
    });
  });

  describe('Object to classifications', () => {
    test('It can transform an object with values to classification array', () => {
      const lookup = new CorpusLookup(corpus, stemmer);
      const classifications = lookup.objToClassifications({
        first: 0.1,
        second: 0.9,
      });
      const expected = [
        { intent: 'second', score: 0.9 },
        { intent: 'first', score: 0.1 },
      ];
      expect(classifications).toEqual(expected);
    });
  });

  describe('Vector to classifications', () => {
    test('It can transform a vector with values to classification array', () => {
      const lookup = new CorpusLookup(corpus, stemmer);
      const classifications = lookup.vectorToClassifications([0.1, 0.9]);
      const expected = [
        { intent: 'second', score: 0.9 },
        { intent: 'first', score: 0.1 },
      ];
      expect(classifications).toEqual(expected);
    });
  });
});
