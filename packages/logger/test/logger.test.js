const logger = require('../src/logger');

describe('logger', () => {
  describe('singleton', () => {
    test('It should be a singleton', () => {
      expect(logger).toBeDefined();
    });
  });

  describe('logging', () => {
    test('It should debug', () => {
      const spy = jest.spyOn(logger.logger, 'debug').mockImplementation((msg) => msg);
      const message = 'This is a debug message';
      logger.debug(message);
      expect(spy).toHaveBeenCalled();
      expect(spy).toHaveBeenCalledWith(message);
    });
    test('It should info', () => {
      const spy = jest.spyOn(logger.logger, 'info').mockImplementation((msg) => msg);
      const message = 'This is a info message';
      logger.info(message);
      expect(spy).toHaveBeenCalled();
      expect(spy).toHaveBeenCalledWith(message);
    });
    test('It should warn', () => {
      const spy = jest.spyOn(logger.logger, 'warn').mockImplementation((msg) => msg);
      const message = 'This is a warn message';
      logger.warn(message);
      expect(spy).toHaveBeenCalled();
      expect(spy).toHaveBeenCalledWith(message);
    });
    test('It should error', () => {
      const spy = jest.spyOn(logger.logger, 'error').mockImplementation((msg) => msg);
      const message = 'This is a error message';
      logger.error(message);
      expect(spy).toHaveBeenCalled();
      expect(spy).toHaveBeenCalledWith(message);
    });
    test('It should log', () => {
      const spy = jest.spyOn(logger.logger, 'info').mockImplementation((msg) => msg);
      const message = 'This is a log message';
      logger.log(message);
      expect(spy).toHaveBeenCalled();
      expect(spy).toHaveBeenCalledWith(message);
    });
    test('It should trace', () => {
      const spy = jest.spyOn(logger.logger, 'trace').mockImplementation((msg) => msg);
      const message = 'This is a trace message';
      logger.trace(message);
      expect(spy).toHaveBeenCalled();
      expect(spy).toHaveBeenCalledWith(message);
    });
    test('It should fatal', () => {
      const spy = jest.spyOn(logger.logger, 'fatal').mockImplementation((msg) => msg);
      const message = 'This is a fatal message';
      logger.fatal(message);
      expect(spy).toHaveBeenCalled();
      expect(spy).toHaveBeenCalledWith(message);
    });
  });
});
