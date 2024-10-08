const { isJsonObject, getValidationMessage } = require('../src/helper');

describe('isJsonObject', () => {
  test('It should be able to detect objects', async () => {
    expect(isJsonObject('text')).toEqual(false);
    expect(isJsonObject(123)).toEqual(false);
    expect(isJsonObject({})).toEqual(true);
    expect(isJsonObject({ text: 'sample' })).toEqual(true);
    expect(isJsonObject('{"text": 123}')).toEqual(true);
    expect(isJsonObject('{"text: 123}')).toEqual(false);
  });
});

describe('getValidationMessage', () => {
  test('It should be always the same', async () => {
    const validationCase1 = {
      currentRetry: 1,
      message: 'wrong value, try again',
    };
    expect(validationCase1.message).toEqual(getValidationMessage(validationCase1));
    validationCase1.currentRetry += 1;
    expect(validationCase1.message).toEqual(getValidationMessage(validationCase1));
  });

  test('It should be always the same although is a list', async () => {
    const validationCase1 = {
      currentRetry: 1,
      message: ['wrong value, try again'],
    };
    expect(validationCase1.message[0]).toEqual(getValidationMessage(validationCase1));
    validationCase1.currentRetry += 1;
    expect(validationCase1.message[0]).toEqual(getValidationMessage(validationCase1));
    validationCase1.currentRetry += 1;
    expect(validationCase1.message[0]).toEqual(getValidationMessage(validationCase1));
  });

  test('It should return a different error message', async () => {
    const validationCase1 = {
      currentRetry: 1,
      message: ['wrong value, try again', 'again is a wrong value, try one time more'],
    };
    expect(validationCase1.message[0]).toEqual(getValidationMessage(validationCase1));
    validationCase1.currentRetry += 1;
    expect(validationCase1.message[1]).toEqual(getValidationMessage(validationCase1));
  });

  test('It should return the last message if current retry exceeds index', async () => {
    const validationCase1 = {
      currentRetry: 4,
      message: ['wrong value, try again', 'again is a wrong value, try one time more'],
    };
    expect(validationCase1.message[validationCase1.message.length - 1]).toEqual(getValidationMessage(validationCase1));
  });
});
