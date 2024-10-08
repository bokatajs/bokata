const { ExpressApiServer } = require('../src');

describe('ExpressApiServer', () => {
  describe('Constructor', () => {
    test('Constructor', () => {
      const server = new ExpressApiServer();
      expect(server).toBeDefined();
    });

    test('There should be default settings', () => {
      const server = new ExpressApiServer();
      expect(server.settings).toEqual({
        apiRoot: '/api',
        port: 3000,
        serveBot: false,
        tag: 'api-server',
      });
    });

    test('By default, there should be NO plugins or routers', () => {
      const server = new ExpressApiServer();
      expect(server.plugins).toHaveLength(0);
      expect(server.routers).toHaveLength(0);
    });
  });

  describe('Methods', () => {
    test('`isStarted` should be false', () => {
      const server = new ExpressApiServer();
      expect(server.isStarted()).toBeFalsy();
    });

    test('`newRouter` should return a router', () => {
      const server = new ExpressApiServer();
      expect(server.newRouter()).toBeTruthy();
    });

    test('With NO port set, `start` should return immediately', () => {
      const server = new ExpressApiServer();
      server.settings.port = null;
      expect(server.start).toBeDefined();
      expect(typeof server.start).toBe('function');
      expect(server.start()).toBeFalsy();
      expect(server.settings.port).toBeNull();
    });
  });
});
