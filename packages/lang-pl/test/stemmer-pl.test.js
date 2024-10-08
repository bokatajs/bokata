const { NormalizerPl, TokenizerPl, StemmerPl } = require('../src');

const normalizer = new NormalizerPl();
const tokenizer = new TokenizerPl();
const stemmer = new StemmerPl();

describe('Stemmer', () => {
  describe('Constructor', () => {
    test('It should create a new instance', () => {
      const instance = new StemmerPl();
      expect(instance).toBeDefined();
    });
  });

  describe('Stem', () => {
    test('Should stem "Czy to tak tęskny dźwięk aż serce skacze"', () => {
      const input = 'Czy to tak tęskny dźwięk aż serce skacze';
      const expected = ['czy', 'to', 'tak', 'teskn', 'dzwi', 'az', 'serc', 'skacz'];
      const tokens = tokenizer.tokenize(normalizer.normalize(input));
      const actual = stemmer.stem(tokens);
      expect(actual).toEqual(expected);
    });
  });
});
