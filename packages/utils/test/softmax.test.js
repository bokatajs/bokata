const { softMax } = require('../src');

describe('SoftMax', () => {
  test('It should calculate softmax of an array of numbers', () => {
    const input = [0, 0.1, 0.2, 1.2, 0.7, 0.8];
    const expected = [
      0.09186123904082086, 0.10152236988631053, 0.11219957073246928, 0.30499005428297654, 0.18498581883004564,
      0.204440947227377,
    ];
    const actual = softMax(input);
    expect(actual).toEqual(expected);
  });
});
