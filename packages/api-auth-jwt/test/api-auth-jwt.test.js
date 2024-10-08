const { Container } = require('@bokata/core');
const { Database } = require('@bokata/database');
const { ApiAuthJwt } = require('../src');
const ApiServerMock = require('./api-server-mock');
const ResMock = require('./res-mock');

const unicorn = 'unicorn123';

function bootstrap() {
  const container = new Container();
  container.register('database', Database);
  container.register('api-server', new ApiServerMock());
  container.register('logger', console);
  return container;
}

function callWithReq(method, path, req, srcContainer) {
  return new Promise((resolve) => {
    const container = srcContainer || bootstrap();
    const apiAuthJwt = new ApiAuthJwt();
    apiAuthJwt.register(container);
    process.nextTick(() => {
      const apiServer = container.get('api-server');
      const res = new ResMock();
      const callback = (err, result) => {
        resolve({
          container,
          res,
          err,
          result,
        });
      };
      res.callback = callback;
      apiServer.call(method, path, req, res, callback);
    });
  });
}

describe('API Auth JWT', () => {
  describe('Register', () => {
    test('Should create a user in database', async () => {
      const req = {
        body: {
          email: 'anna@email.com',
          password: unicorn,
          name: 'Anna',
        },
      };
      const actual = await callWithReq('post', '/auth/local/register', req);
      const { res } = actual;
      expect(res.statusValue).toEqual(200);
      expect(res.sendValue).toEqual('User created');
      const database = actual.container.get('database');
      const users = await database.find('users');
      expect(users).toHaveLength(1);
      expect(users[0].email).toEqual('anna@email.com');
    });
  });

  describe('login', () => {
    test('Should login an existing user', async () => {
      const req = {
        body: {
          email: 'anna@email.com',
          password: unicorn,
          name: 'Anna',
        },
      };
      const res1 = await callWithReq('post', '/auth/local/register', req);
      const req2 = {
        body: {
          email: 'anna@email.com',
          password: unicorn,
        },
      };
      const actual = await callWithReq('post', '/auth/local/login', req2, res1.container);
      const { res } = actual;
      expect(res.sendValue.access_token).toBeDefined();
      expect(res.sendValue.token_type).toEqual('bearer');
    });
  });

  describe('Refresh', () => {
    test('Should refresh an existing user', async () => {
      const req = {
        body: {
          email: 'anna@email.com',
          password: unicorn,
          name: 'Anna',
        },
      };
      const res1 = await callWithReq('post', '/auth/local/register', req);
      const req2 = {
        body: {
          email: 'anna@email.com',
          password: unicorn,
        },
      };
      const res2 = await callWithReq('post', '/auth/local/login', req2, res1.container);
      const req3 = {
        body: {
          email: 'anna@email.com',
          refreshToken: res2.res.sendValue.refresh_token,
        },
      };
      const res3 = await callWithReq('post', '/auth/local/refresh', req3, res1.container);
      expect(res3.res.sendValue.access_token).toBeDefined();
      expect(res3.res.sendValue.token_type).toEqual('bearer');
    });
  });
});
