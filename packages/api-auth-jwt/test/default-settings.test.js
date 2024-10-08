const { Container } = require('@bokata/core');
const getSettings = require('../src/default-settings');

describe('Default settings', () => {
  test('It should return default settings', () => {
    const container = new Container();
    const settings = getSettings(container);
    expect(settings.usernameField).toEqual('email');
    expect(settings.passwordField).toEqual('password');
    expect(settings.usersTable).toEqual('users');
    expect(settings.jwtSecret).toEqual('Ch4nG3 Th15');
    expect(settings.jwtAlgorithm).toEqual('HS256');
    expect(settings.jwtExpiration).toEqual('15m');
    expect(settings.jwtExpirationSeconds).toEqual(900);
  });
  test('Own settings can be provided', () => {
    const container = new Container();
    container.registerConfiguration('api-auth-jwt', {
      usernameField: 'email1',
      passwordField: 'password1',
      usersTable: 'users1',
      jwtSecret: 'Ch4nG3 Th151',
      jwtAlgorithm: 'HS2561',
      jwtExpiration: '30m',
      jwtExpirationSeconds: 1800,
    });
    const settings = getSettings(container);
    expect(settings.usernameField).toEqual('email1');
    expect(settings.passwordField).toEqual('password1');
    expect(settings.usersTable).toEqual('users1');
    expect(settings.jwtSecret).toEqual('Ch4nG3 Th151');
    expect(settings.jwtAlgorithm).toEqual('HS2561');
    expect(settings.jwtExpiration).toEqual('30m');
    expect(settings.jwtExpirationSeconds).toEqual(1800);
  });
});
