const { containerBootstrap } = require('@bokata/core');
const { LangJa } = require('../../lang-ja');
const { Ner, ExtractorEnum } = require('../src');

describe('Extractor Enum', () => {
  describe('Constructor', () => {
    test('It should create an instance', () => {
      const instance = new ExtractorEnum();
      expect(instance).toBeDefined();
    });
  });

  describe('Get word positions', () => {
    test('Should get position of only one word', () => {
      const instance = new ExtractorEnum();
      const text1 = 'Morbi';
      const result = instance.getWordPositions(text1);
      expect(result).toBeDefined();
      expect(result).toHaveLength(1);
      expect(result[0]).toEqual({ start: 0, end: 4, len: 5 });
    });
    test('Should get position of only one word even if surrounded by non alphanumeric chars', () => {
      const instance = new ExtractorEnum();
      const text1 = '; . -Morbi. - ;..,^*';
      const result = instance.getWordPositions(text1);
      expect(result).toBeDefined();
      expect(result).toHaveLength(1);
      expect(result[0]).toEqual({ start: 5, end: 9, len: 5 });
    });
    test('Should get position of several words', () => {
      const instance = new ExtractorEnum();
      const text1 = ';:Morbi..- interdum,   ultricies  ';
      const result = instance.getWordPositions(text1);
      expect(result).toHaveLength(3);
      expect(result[0]).toEqual({ start: 2, end: 6, len: 5 });
      expect(result[1]).toEqual({ start: 11, end: 18, len: 8 });
      expect(result[2]).toEqual({ start: 23, end: 31, len: 9 });
    });
    test('Should get position of words on long texts', () => {
      const instance = new ExtractorEnum();
      const text1 =
        'Morbi interdum ultricies neque varius condimentum. Donec volutpat turpis interdum metus ultricies vulputate. Duis ultricies rhoncus sapien, sit amet fermentum risus imperdiet vitae. Ut et lectus';
      const result = instance.getWordPositions(text1);
      expect(result).toHaveLength(26);
      expect(result[0]).toEqual({ start: 0, end: 4, len: 5 });
      expect(result[25]).toEqual({ start: 188, end: 193, len: 6 });
    });
  });

  describe('Get best substring', () => {
    test('Should get position of best when exact', () => {
      const instance = new ExtractorEnum();
      const text1 =
        'Morbi interdum ultricies neque varius condimentum. Donec volutpat turpis interdum metus ultricies vulputate. Duis ultricies rhoncus sapien, sit amet fermentum risus imperdiet vitae. Ut et lectus';
      const text2 = 'interdum ultricies';
      const result = instance.getBestSubstring(text1, text2);
      expect(result).toBeDefined();
      expect(result).toEqual({
        start: 6,
        end: 23,
        len: 18,
        levenshtein: 0,
        accuracy: 1,
      });
    });
    test('Should get position of best when several words are similar to search string', () => {
      const instance = new ExtractorEnum();
      const text1 =
        'Morbi interdum ultricies neque varius condimentum. Donec volutpat turpis interdum metus ultricies vulputate. Duis ultricies rhoncus sapien, sit amet fermentum risus imperdiet vitae. Ut et lectus';
      const text2 = 'interdumaultriciesbneque';
      const result = instance.getBestSubstring(text1, text2);
      expect(result).toBeDefined();
      expect(result).toEqual({
        start: 6,
        end: 29,
        len: 24,
        levenshtein: 2,
        accuracy: 0.9166666666666666,
      });
    });
    test('Should return 0 to length result when the substring is longer than the string', () => {
      const instance = new ExtractorEnum();
      const text1 = 'dumaultriciesbne';
      const text2 = 'interdumaultriciesbneque';
      const result = instance.getBestSubstring(text1, text2);
      expect(result).toBeDefined();
      expect(result).toEqual({
        start: 0,
        end: 15,
        len: 16,
        levenshtein: 8,
        accuracy: 0.6666666666666666,
      });
    });
  });

  describe('Get best substring list', () => {
    test('If not threshold is defined, then search for exact occurrences', () => {
      const instance = new ExtractorEnum();
      const text1 =
        'Morbi interdum ultricies neque varius condimentum. Donec volutpat turpis interdum metus ultricies vulputate. Duis ultricies rhoncus sapien, sit amet fermentum risus imperdiet vitae. Ut et lectus';
      const text2 = 'interdum ultricies';
      const result = instance.getBestSubstringList(text1, text2);
      expect(result).toHaveLength(1);
      expect(result[0]).toEqual({
        start: 6,
        end: 23,
        len: 18,
        levenshtein: 0,
        accuracy: 1,
      });
    });
    test('If there are more than 1 occurrence search exact, should return all', () => {
      const instance = new ExtractorEnum();
      const text1 =
        'Morbi interdum ultricies neque varius condimentum. Donec volutpat turpis interdum metus ultricies vulputate. Duis ultricies rhoncus sapien, sit amet fermentum risus imperdiet vitae. Ut et lectus';
      const text2 = 'interdum';
      const result = instance.getBestSubstringList(text1, text2);
      expect(result).toHaveLength(2);
      expect(result[0]).toEqual({
        start: 6,
        end: 13,
        len: 8,
        levenshtein: 0,
        accuracy: 1,
      });
      expect(result[1]).toEqual({
        start: 73,
        end: 80,
        len: 8,
        levenshtein: 0,
        accuracy: 1,
      });
    });
    test('Should get more than 1 occurrence when searching with threshold', () => {
      const instance = new ExtractorEnum();
      const text1 =
        'Morbi interdum ultricies neque varius condimentum. Donec volutpat turpis interdum metus ultricies vulputate. Duis ultricies rhoncus sapien, sit amet fermentum risus imperdiet vitae. Ut et lectus';
      const text2 = 'internum';
      const result = instance.getBestSubstringList(text1, text2, undefined, 0.8);
      expect(result).toHaveLength(2);
      expect(result[0]).toEqual({
        start: 6,
        end: 13,
        len: 8,
        levenshtein: 1,
        accuracy: 0.875,
      });
      expect(result[1]).toEqual({
        start: 73,
        end: 80,
        len: 8,
        levenshtein: 1,
        accuracy: 0.875,
      });
    });
    test('Should be tolerant to typos with spaces when searching with threshold', () => {
      const instance = new ExtractorEnum();
      const text1 = 'Morbi inter dum ultricies neque varius condimentum. Donec volutpat turpis in terdum';
      const text2 = 'internum';
      const result = instance.getBestSubstringList(text1, text2, undefined, 1 - 2 / text2.length);
      expect(result).toHaveLength(2);
      expect(result[0]).toEqual({
        start: 6,
        end: 14,
        len: 9,
        levenshtein: 2,
        accuracy: 0.75,
      });
      expect(result[1]).toEqual({
        start: 74,
        end: 82,
        len: 9,
        levenshtein: 2,
        accuracy: 0.75,
      });
    });
    test('Should return 0 to length element in array when the substring is longer than the string and accuracy is at least threshold', () => {
      const instance = new ExtractorEnum();
      const text1 = 'dumaultriciesbne';
      const text2 = 'interdumaultriciesbneque';
      const result = instance.getBestSubstringList(text1, text2, undefined, 0.6);
      expect(result).toBeDefined();
      expect(result).toEqual([
        {
          start: 0,
          end: 15,
          len: 16,
          levenshtein: 8,
          accuracy: 0.6666666666666666,
        },
      ]);
    });
    test('Should return empty array when the substring is longer than the string and accuracy is lower than threshold', () => {
      const instance = new ExtractorEnum();
      const text1 = 'dumaultriciesbne';
      const text2 = 'interdumaultriciesbneque';
      const result = instance.getBestSubstringList(text1, text2, undefined, 0.7);
      expect(result).toBeDefined();
      expect(result).toEqual([]);
    });
  });

  describe('Extract', () => {
    test('It should extract enum entities without tokenizer', async () => {
      const ner = new Ner();
      ner.addRuleOptionTexts('en', 'hero', 'spiderman', ['Spiderman', 'spider-man']);
      ner.addRuleOptionTexts('en', 'hero', 'iron man', ['iron man', 'iron-man']);
      ner.addRuleOptionTexts('en', 'hero', 'thor', ['Thor']);
      const input = {
        text: 'I saw spederman eating spaghetti in the city',
        locale: 'en',
      };
      const actual = await ner.process(input);
      expect(actual.entities).toEqual([
        {
          start: 6,
          end: 14,
          len: 9,
          levenshtein: 1,
          accuracy: 0.8888888888888888,
          entity: 'hero',
          type: 'enum',
          option: 'spiderman',
          sourceText: 'Spiderman',
          utteranceText: 'spederman',
        },
      ]);
    });

    test('It should extract enum entities when exact is marked without tokenizer', async () => {
      const ner = new Ner({ threshold: 1 });
      ner.addRuleOptionTexts('en', 'hero', 'spiderman', ['Spiderman', 'spider-man']);
      ner.addRuleOptionTexts('en', 'hero', 'iron man', ['iron man', 'iron-man']);
      ner.addRuleOptionTexts('en', 'hero', 'thor', ['Thor']);
      const input = {
        text: 'I saw spiderman eating spaghetti in the city',
        locale: 'en',
      };
      const actual = await ner.process(input);
      expect(actual.entities).toEqual([
        {
          start: 6,
          end: 14,
          len: 9,
          levenshtein: 0,
          accuracy: 1,
          entity: 'hero',
          type: 'enum',
          option: 'spiderman',
          sourceText: 'Spiderman',
          utteranceText: 'spiderman',
        },
      ]);
    });

    test('It should extract enum entities with spaced japanese also without tokenizer', async () => {
      const ner = new Ner({ threshold: 1 });
      ner.addRuleOptionTexts('ja', 'person', 'employee', ['山田', '佐藤']);
      ner.addRuleOptionTexts('ja', 'person', 'superior', ['田中', '嶋田']);
      ner.addRuleOptionTexts('ja', 'food', 'sushi', ['穴子', 'マグロ']);
      const input = {
        text: '山田さん と 田中さん は 穴子寿司を 食べました',
        locale: 'ja',
      };
      const actual = await ner.process(input);
      expect(actual.entities).toEqual([
        {
          start: 0,
          end: 1,
          len: 2,
          levenshtein: 0,
          accuracy: 1,
          entity: 'person',
          type: 'enum',
          option: 'employee',
          sourceText: '山田',
          utteranceText: '山田',
        },
        {
          start: 7,
          end: 8,
          len: 2,
          levenshtein: 0,
          accuracy: 1,
          entity: 'person',
          type: 'enum',
          option: 'superior',
          sourceText: '田中',
          utteranceText: '田中',
        },
        {
          start: 14,
          end: 15,
          len: 2,
          levenshtein: 0,
          accuracy: 1,
          entity: 'food',
          type: 'enum',
          option: 'sushi',
          sourceText: '穴子',
          utteranceText: '穴子',
        },
      ]);
    });

    test('It should extract only one enum entity with unspaced japanese and no tokenizer', async () => {
      const ner = new Ner({ threshold: 1 });
      ner.addRuleOptionTexts('ja', 'person', 'employee', ['山田', '佐藤']);
      ner.addRuleOptionTexts('ja', 'person', 'superior', ['田中', '嶋田']);
      ner.addRuleOptionTexts('ja', 'food', 'sushi', ['穴子', 'マグロ']);
      const input = {
        text: '山田さんと田中さんは穴子寿司を食べました',
        locale: 'ja',
      };
      const actual = await ner.process(input);
      expect(actual.entities).toEqual([
        {
          start: 0,
          end: 1,
          len: 2,
          levenshtein: 0,
          accuracy: 1,
          entity: 'person',
          type: 'enum',
          option: 'employee',
          sourceText: '山田',
          utteranceText: '山田',
        },
      ]);
    });

    test('It should extract enum entities with default tokenizer', async () => {
      const container = containerBootstrap();
      const ner = new Ner({}, container);
      ner.addRuleOptionTexts('en', 'hero', 'spiderman', ['Spiderman', 'spider-man']);
      ner.addRuleOptionTexts('en', 'hero', 'iron man', ['iron man', 'iron-man']);
      ner.addRuleOptionTexts('en', 'hero', 'thor', ['Thor']);
      const input = {
        text: 'I saw spederman eating spaghetti in the city',
        locale: 'en',
      };
      const actual = await ner.process(input);
      expect(actual.entities).toEqual([
        {
          start: 6,
          end: 14,
          len: 9,
          levenshtein: 1,
          accuracy: 0.8888888888888888,
          entity: 'hero',
          type: 'enum',
          option: 'spiderman',
          sourceText: 'Spiderman',
          utteranceText: 'spederman',
        },
      ]);
    });

    test('It should extract enum entities with default tokenizer and forced position correction', async () => {
      const container = containerBootstrap();
      const ner = new Ner({}, container);
      ner.addRuleOptionTexts('en', 'hero', 'spiderman', ['Spiderman', 'spider-man']);
      ner.addRuleOptionTexts('en', 'hero', 'iron man', ['iron man', 'iron-man']);
      ner.addRuleOptionTexts('en', 'hero', 'thor', ['Thor']);
      const input = {
        text: 'I saw spederman eating spaghetti in the city.',
        locale: 'en',
      };
      const actual = await ner.process(input);
      expect(actual.entities).toEqual([
        {
          start: 6,
          end: 14,
          len: 9,
          levenshtein: 1,
          accuracy: 0.8888888888888888,
          entity: 'hero',
          type: 'enum',
          option: 'spiderman',
          sourceText: 'Spiderman',
          utteranceText: 'spederman',
        },
      ]);
    });

    test('It should extract enum entities with default tokenizer and a point instead of space', async () => {
      const container = containerBootstrap();
      const ner = new Ner({}, container);
      ner.addRuleOptionTexts('en', 'hero', 'spiderman', ['Spiderman', 'spider-man']);
      ner.addRuleOptionTexts('en', 'hero', 'iron man', ['iron man', 'iron-man']);
      ner.addRuleOptionTexts('en', 'hero', 'thor', ['Thor']);
      const input = {
        text: 'I saw.spederman eating spaghetti in the city',
        locale: 'en',
      };
      const actual = await ner.process(input);
      expect(actual.entities).toEqual([
        {
          start: 6,
          end: 14,
          len: 9,
          levenshtein: 1,
          accuracy: 0.8888888888888888,
          entity: 'hero',
          type: 'enum',
          option: 'spiderman',
          sourceText: 'Spiderman',
          utteranceText: 'spederman',
        },
      ]);
    });

    test('It should extract enum entities with default tokenizer and a double space before entity', async () => {
      const container = containerBootstrap();
      const ner = new Ner({}, container);
      ner.addRuleOptionTexts('en', 'hero', 'spiderman', ['Spiderman', 'spider-man']);
      ner.addRuleOptionTexts('en', 'hero', 'iron man', ['iron man', 'iron-man']);
      ner.addRuleOptionTexts('en', 'hero', 'thor', ['Thor']);
      const input = {
        text: 'I saw  spederman eating spaghetti in the city',
        locale: 'en',
      };
      const actual = await ner.process(input);
      expect(actual.entities).toEqual([
        {
          start: 7,
          end: 15,
          len: 9,
          levenshtein: 1,
          accuracy: 0.8888888888888888,
          entity: 'hero',
          type: 'enum',
          option: 'spiderman',
          sourceText: 'Spiderman',
          utteranceText: 'spederman',
        },
      ]);
    });

    test('It should extract enum entities with default tokenizer and a double space after entity', async () => {
      const container = containerBootstrap();
      const ner = new Ner({}, container);
      ner.addRuleOptionTexts('en', 'hero', 'spiderman', ['Spiderman', 'spider-man']);
      ner.addRuleOptionTexts('en', 'hero', 'iron man', ['iron man', 'iron-man']);
      ner.addRuleOptionTexts('en', 'hero', 'thor', ['Thor']);
      const input = {
        text: 'I saw spederman eating  spaghetti in the city',
        locale: 'en',
      };
      const actual = await ner.process(input);
      expect(actual.entities).toEqual([
        {
          start: 6,
          end: 14,
          len: 9,
          levenshtein: 1,
          accuracy: 0.8888888888888888,
          entity: 'hero',
          type: 'enum',
          option: 'spiderman',
          sourceText: 'Spiderman',
          utteranceText: 'spederman',
        },
      ]);
    });

    test('It should extract enum entities when exact is marked with tokenizer', async () => {
      const container = containerBootstrap();
      const ner = new Ner({ threshold: 1 }, container);
      ner.addRuleOptionTexts('en', 'hero', 'spiderman', ['Spiderman', 'spider-man']);
      ner.addRuleOptionTexts('en', 'hero', 'iron man', ['iron man', 'iron-man']);
      ner.addRuleOptionTexts('en', 'hero', 'thor', ['Thor']);
      const input = {
        text: 'I saw spiderman eating spaghetti in the city',
        locale: 'en',
      };
      const actual = await ner.process(input);
      expect(actual.entities).toEqual([
        {
          start: 6,
          end: 14,
          len: 9,
          levenshtein: 0,
          accuracy: 1,
          entity: 'hero',
          type: 'enum',
          option: 'spiderman',
          sourceText: 'Spiderman',
          utteranceText: 'spiderman',
        },
      ]);
    });

    test('It should extract only one enum entity with unspaced japanese and with japanese tokenizer', async () => {
      const container = containerBootstrap();
      container.use(LangJa);
      const ner = new Ner({ threshold: 1 }, container);
      ner.addRuleOptionTexts('ja', 'person', 'employee', ['山田', '佐藤']);
      ner.addRuleOptionTexts('ja', 'person', 'superior', ['田中', '嶋田']);
      ner.addRuleOptionTexts('ja', 'food', 'sushi', ['穴子', 'マグロ']);
      const input = {
        text: '山田さんと田中さんは穴子寿司を食べました',
        locale: 'ja',
      };
      const actual = await ner.process(input);
      expect(actual.entities).toEqual([
        {
          start: 0,
          end: 1,
          len: 2,
          levenshtein: 0,
          accuracy: 1,
          entity: 'person',
          type: 'enum',
          option: 'employee',
          sourceText: '山田',
          utteranceText: '山田',
        },
        {
          start: 5,
          end: 6,
          len: 2,
          levenshtein: 0,
          accuracy: 1,
          entity: 'person',
          type: 'enum',
          option: 'superior',
          sourceText: '田中',
          utteranceText: '田中',
        },
        {
          start: 10,
          end: 11,
          len: 2,
          levenshtein: 0,
          accuracy: 1,
          entity: 'food',
          type: 'enum',
          option: 'sushi',
          sourceText: '穴子',
          utteranceText: '穴子',
        },
      ]);
    });
  });
  describe('Get Entities From Utterance', () => {
    test('It should extract entities from utterance without tokenizer', async () => {
      const ner = new Ner();
      const result = ner.getEntitiesFromUtterance('en', 'I saw a @hero eating @food in the @place');
      expect(result).toEqual(['hero', 'food', 'place']);
    });
  });
});
