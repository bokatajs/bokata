const passport = require('passport');
const configurePassport = require('./configure-passport');
const ensureAuthenticated = require('./ensure-authenticated');
const mountUser = require('./user.router');
const getSettings = require('./default-settings');

class ApiAuthJwt {
  register(container) {
    process.nextTick(() => {
      const settings = getSettings(container);
      const database = container.get('database');
      const apiServer = container.get('api-server');
      configurePassport(database, settings);
      const plugin = passport.initialize();
      apiServer.plugins.push(plugin);
      const logger = container.get('logger');
      container.register('auth', { ensureAuthenticated });
      const router = apiServer.newRouter();
      mountUser(router, container);
      apiServer.routers.push(router);
      logger.info('API Auth JWT plugin mounted');
    });
  }
}

module.exports = ApiAuthJwt;
