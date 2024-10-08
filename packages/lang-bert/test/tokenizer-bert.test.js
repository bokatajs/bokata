const { Container } = require('@bokata/core');
const { TokenizerBert } = require('../src');
const { setResponse, request, resetNumCalls, getNumCalls } = require('./request-mock');

describe('Tokenizer Bert', () => {
  describe('Constructor', () => {
    test('It should create a new instance', () => {
      const container = {};
      const tokenizer = new TokenizerBert(container);
      expect(tokenizer).toBeDefined();
      expect(tokenizer.container).toBe(container);
      expect(tokenizer.name).toEqual('tokenizer-bert');
    });
  });

  describe('Tokenize', () => {
    test('It should tokenize a sentence and clear BERT special tokens', async () => {
      resetNumCalls();
      const container = new Container();
      container.register('request', { get: request });
      const tokenizer = new TokenizerBert(container);
      setResponse({
        tokens: ['[CLS]', '?', 'this', 'should', 'be', 'token', '##ized', '.', '[SEP]'],
      });
      const input = '?this should be tokenized.';
      const expected = ['this', 'should', 'be', 'token', '##ized'];
      const actual = await tokenizer.tokenize(input);
      const numCalls = getNumCalls();
      expect(numCalls).toEqual(1);
      expect(actual).toEqual(expected);
    });
  });
});
