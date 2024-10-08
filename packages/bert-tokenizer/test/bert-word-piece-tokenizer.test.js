const fs = require('fs');
const { BertWordPieceTokenizer } = require('../src');

const vocabEn = fs.readFileSync('./packages/bert-tokenizer/dicts/vocab-en.txt', 'utf-8');

describe('BertWordPieceTokenizer', () => {
  describe('constructor', () => {
    test('It should create a new instance', () => {
      const tokenizer = new BertWordPieceTokenizer();
      expect(tokenizer).toBeDefined();
    });
    test('It should load the vocabulary if provided', () => {
      const tokenizer = new BertWordPieceTokenizer({ vocabContent: vocabEn });
      expect(tokenizer.words).toBeDefined();
      expect(tokenizer.affixes).toBeDefined();
      expect(tokenizer.affixMaxLength).toEqual(14);
    });
  });

  describe('Split sentence', () => {
    test('Should split a sentence into tokens', () => {
      const input = "This isn't tokenized, maybe.";
      const tokenizer = new BertWordPieceTokenizer({ vocabContent: vocabEn });
      const actual = tokenizer.splitSentence(input);
      expect(actual.length).toEqual(11);
      expect(actual[0].token).toEqual('This');
      expect(actual[6].start).toEqual(11);
      expect(actual[6].end).toEqual(19);
      expect(actual[6].type).toEqual('word');
    });
  });

  describe('Get Best Prefix', () => {
    test('Should calculate the best prefix for a word', () => {
      const input = 'Supervised';
      const expected = 'Super';
      const tokenizer = new BertWordPieceTokenizer({ vocabContent: vocabEn });
      const actual = tokenizer.getBestPrefix(input);
      expect(actual).toEqual(expected);
    });
  });

  describe('Get Best Affix', () => {
    test('Should calculate the best affix for a word', () => {
      const input = 'Supervised';
      const expected = 'S';
      const tokenizer = new BertWordPieceTokenizer({ vocabContent: vocabEn });
      const actual = tokenizer.getBestAffix(input);
      expect(actual).toEqual(expected);
    });
  });

  describe('Tokenize Word', () => {
    test('Should return several tokens if word does not match - with isInside', () => {
      const input = 'Supervised';
      const expected = {
        tokens: ['##S', '##upe', '##r', '##vise', '##d'],
        ids: [1708, 26939, 1197, 16641, 1181],
      };
      const tokenizer = new BertWordPieceTokenizer({ vocabContent: vocabEn });
      const actual = tokenizer.tokenizeWord(input, false, true);
      expect(actual).toEqual(expected);
    });
    test('Should return several tokens if word does not match and has affixes', () => {
      const input = 'Supervised';
      const expected = {
        tokens: ['Super', '##vise', '##d'],
        ids: [3198, 16641, 1181],
      };
      const tokenizer = new BertWordPieceTokenizer({ vocabContent: vocabEn });
      const actual = tokenizer.tokenizeWord(input);
      expect(actual).toEqual(expected);
    });
    test('Should return several tokens if word does not match and has affixes #2', () => {
      const input = 'vegan';
      const expected = {
        tokens: ['ve', '##gan'],
        ids: [1396, 3820],
      };
      const tokenizer = new BertWordPieceTokenizer({ vocabContent: vocabEn });
      const actual = tokenizer.tokenizeWord(input);
      expect(actual).toEqual(expected);
    });
    test('Should return matched word if found', () => {
      const input = 'supervised';
      const expected = {
        tokens: ['supervised'],
        ids: [14199],
      };
      const tokenizer = new BertWordPieceTokenizer({ vocabContent: vocabEn });
      const actual = tokenizer.tokenizeWord(input);
      expect(actual).toEqual(expected);
    });
  });

  describe('Tokenize Sentence', () => {
    test('Should tokenize a sentence', () => {
      const expected = {
        ids: [1188, 1110, 170, 5650, 119],
        offsets: [
          [0, 4],
          [5, 7],
          [8, 9],
          [10, 18],
          [18, 19],
        ],
        tokens: ['This', 'is', 'a', 'sentence', '.'],
      };
      const input = 'This is a sentence.';
      const tokenizer = new BertWordPieceTokenizer({ vocabContent: vocabEn });
      const actual = tokenizer.tokenizeSentence(input);
      expect(actual).toEqual(expected);
    });
  });

  describe('Encode', () => {
    test('It should add a [CLS] at the begining', () => {
      const tokenizer = new BertWordPieceTokenizer({ vocabContent: vocabEn });
      const actual = tokenizer.encode('This is the question.', 'This is the context.');
      expect(actual.ids[0]).toEqual(101);
      expect(actual.tokens[0]).toEqual('[CLS]');
    });
    test('It should add a [SEP] between question and context', () => {
      const tokenizer = new BertWordPieceTokenizer({ vocabContent: vocabEn });
      const actual = tokenizer.encode('This is the question.', 'This is the context.');
      expect(actual.ids[6]).toEqual(102);
      expect(actual.tokens[6]).toEqual('[SEP]');
    });
    test('It should add a [SEP] at the end', () => {
      const tokenizer = new BertWordPieceTokenizer({ vocabContent: vocabEn });
      const actual = tokenizer.encode('This is the question.', 'This is the context.');
      expect(actual.ids[actual.ids.length - 1]).toEqual(102);
      expect(actual.tokens[actual.ids.length - 1]).toEqual('[SEP]');
    });
    test('It should add word indexes for words, null for special tokens', () => {
      const tokenizer = new BertWordPieceTokenizer({ vocabContent: vocabEn });
      const actual = tokenizer.encode('This is the question.', 'This is the context.');
      expect(actual.wordIndexes[0]).toEqual(null);
      expect(actual.wordIndexes[1]).toEqual(0);
      expect(actual.wordIndexes[2]).toEqual(1);
      expect(actual.wordIndexes[6]).toEqual(null);
      expect(actual.wordIndexes[7]).toEqual(5);
    });
    test('It should add type ids, 0 for question, 1 for context', () => {
      const tokenizer = new BertWordPieceTokenizer({ vocabContent: vocabEn });
      const actual = tokenizer.encode('This is the question.', 'This is the context.');
      expect(actual.typeIds[0]).toEqual(0);
      expect(actual.typeIds[8]).toEqual(1);
    });
    test('Min length can be provided', () => {
      const tokenizer = new BertWordPieceTokenizer({ vocabContent: vocabEn });
      const actual = tokenizer.encode('This is the question.', 'This is the context.', 100);
      expect(actual.ids.length).toEqual(100);
    });
    test('Max length can be provided', () => {
      const tokenizer = new BertWordPieceTokenizer({ vocabContent: vocabEn });
      const actual = tokenizer.encode('This is the question.', 'This is the context.', undefined, 6);
      expect(actual.ids.length).toEqual(6);
    });
  });

  describe('Encode sliced', () => {
    test('It should generate several slices', () => {
      const tokenizer = new BertWordPieceTokenizer({ vocabContent: vocabEn });
      const actual = tokenizer.encodeSliced(
        'This is the question.',
        'This is the context and we do it larger to have enough tokens.',
        16
      );
      expect(actual.length).toEqual(4);
    });
  });
});
