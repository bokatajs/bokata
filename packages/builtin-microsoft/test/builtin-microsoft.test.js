const { containerBootstrap } = require('@bokata/core');
const { BuiltinMicrosoft } = require('../src');
const numberAgeTests = require('./number-age.json');
const numberTests = require('./number.json');
const numberOrdinalTests = require('./number-ordinal.json');
const numberPercentTests = require('./number-percent.json');
const numberCurrency = require('./number-currency.json');
const numberDimension = require('./number-dimension.json');
const sequence = require('./sequence.json');
const date = require('./date.json');

const container = containerBootstrap();

expect.extend({
  toContainResolution(received, argument) {
    for (let i = 0; i < received.length; i += 1) {
      const actual = received[i];
      if (actual.resolution) {
        const keys = Object.keys(argument);
        let pass = true;
        for (let j = 0; j < keys.length; j += 1) {
          const key = keys[j];
          if (!actual.resolution[key]) {
            pass = false;
          }
          if (argument[key] !== '*') {
            if (!this.equals(actual.resolution[key], argument[key])) {
              pass = false;
            }
          }
        }
        if (pass) {
          return {
            message: () =>
              `expected ${this.utils.printReceived(received)} not to contain resolution ${this.utils.printExpected(
                argument
              )}`,
            pass: true,
          };
        }
      }
    }
    return {
      message: () =>
        `expected ${this.utils.printReceived(received)} to contain resolution ${this.utils.printExpected(argument)}`,
      pass: false,
    };
  },
});

function addTests(base, locale, entityTypeName) {
  const instance = new BuiltinMicrosoft({ container });
  for (let i = 0; i < base.length; i += 1) {
    const testCase = base[i];
    const keys = Object.keys(testCase);
    for (let j = 0; j < keys.length; j += 1) {
      const key = keys[j];
      if (key.startsWith('result')) {
        const current = testCase[key];
        const currentKeys = Object.keys(current);
        for (let k = 0; k < currentKeys.length; k += 1) {
          const currentKey = currentKeys[k];
          if ((currentKey.includes('date') || currentKey.includes('Date')) && testCase[key][currentKey].length === 24) {
            testCase[key][currentKey] = new Date(testCase[key][currentKey]);
          }
        }
        testCase.rawEntitiy = entityTypeName;
      }
    }
    if (!testCase.avoid || !testCase.avoid.includes(locale)) {
      const upperLocale = `${locale.charAt(0).toUpperCase()}${locale.slice(1)}`;
      const utteranceName = `utterance${upperLocale}`;
      const utterance = testCase[utteranceName] || testCase.utterance;
      const resultName = `result${upperLocale}`;
      if (utterance) {
        // eslint-disable-next-line jest/valid-title
        test(utterance, async () => {
          const expected = Object.assign(testCase.result, testCase[resultName]);
          const input = {
            utterance,
            locale,
          };
          const result = await instance.extract(input);
          expect(result.edges).toContainResolution(expected);
        });
      }
    }
  }
}

const languages = [
  { locale: 'en', name: 'English' },
  { locale: 'es', name: 'Spanish' },
  { locale: 'fr', name: 'French' },
  { locale: 'pt', name: 'Portuguese' },
  { locale: 'zh', name: 'Chinese' },
  { locale: 'ja', name: 'Japanese' },
];

describe('NER Manager builtins', () => {
  languages.forEach((language) => {
    describe(`Numbers ${language.name}`, () => {
      addTests(numberTests, language.locale, 'number');
    });
    describe(`Ordinal ${language.name}`, () => {
      addTests(numberOrdinalTests, language.locale, 'ordinal');
    });
    describe(`Percentage ${language.name}`, () => {
      addTests(numberPercentTests, language.locale, 'percentage');
    });
    describe(`Age ${language.name}`, () => {
      addTests(numberAgeTests, language.locale, 'age');
    });
    describe(`Currency ${language.name}`, () => {
      addTests(numberCurrency, language.locale, 'currency');
    });
    describe(`Dimension ${language.name}`, () => {
      addTests(numberDimension, language.locale, 'dimension');
    });
    describe(`Sequence ${language.name}`, () => {
      addTests(sequence, language.locale, 'sequence');
    });
    describe(`Date ${language.name}`, () => {
      addTests(date, language.locale, 'datetimeV2.date');
    });
  });
  describe(`Date english`, () => {
    test('tomorrow morning', async () => {
      const instance = new BuiltinMicrosoft({ container });
      const input = {
        utterance: 'tomorrow morning',
        locale: 'en',
      };
      const results = await instance.extract(input);
      const result = results.edges[0];
      expect(result).toBeDefined();
      expect(result.end).toEqual(15);
      expect(result.entity).toEqual('datetimerange');
      expect(result.len).toEqual(16);
      expect(result.sourceText).toEqual('tomorrow morning');
      expect(result.resolution).toBeDefined();
      expect(result.rawEntity).toEqual('datetimeV2.datetimerange');
    });
  });
});
