const logger = require('../src/logger');

global.console = {
  debug: jest.fn(),
  info: jest.fn(),
  warn: jest.fn(),
  log: jest.fn(),
  error: jest.fn(),
  trace: jest.fn(),
};

describe('Logger', () => {
  describe('Constructor', () => {
    test('Constructor', () => {
      expect(logger).toBeDefined();
    });
  });

  describe('Logger methods', () => {
    test('debug', () => {
      logger.debug('hello world');
      expect(console.debug).toHaveBeenCalledWith('hello world');
    });
    test('info', () => {
      logger.info('hello world');
      expect(console.info).toHaveBeenCalledWith('hello world');
    });
    test('warn', () => {
      logger.warn('hello world');
      expect(console.warn).toHaveBeenCalledWith('hello world');
    });
    test('log', () => {
      logger.log('hello world');
      expect(console.log).toHaveBeenCalledWith('hello world');
    });
    test('error', () => {
      logger.error('hello world');
      expect(console.error).toHaveBeenCalledWith('hello world');
    });
    test('trace', () => {
      logger.trace('hello world');
      expect(console.trace).toHaveBeenCalledWith('hello world');
    });
    test('fatal', () => {
      logger.fatal('hello world');
      expect(console.error).toHaveBeenCalledWith('hello world');
    });
  });
});
