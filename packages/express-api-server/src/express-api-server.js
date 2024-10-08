const { defaultContainer, Clonable } = require('@bokata/core');
const http = require('http');
const https = require('https');
const ExpressApiApp = require('./express-api-app');

class ExpressApiServer extends Clonable {
  constructor(settings = {}, container = undefined) {
    super(
      {
        settings: {},
        container: settings.container || container || defaultContainer,
      },
      container
    );
    this.applySettings(this.settings, settings);
    this.registerDefault();
    if (!this.settings.tag) {
      this.settings.tag = 'api-server';
    }
    this.applySettings(this.settings, this.container.getConfiguration(this.settings.tag));
    if (!this.settings.apiRoot) {
      this.settings.apiRoot = '/api';
    }
    this.plugins = [];
    this.routers = [];
  }

  registerDefault() {
    this.container.registerConfiguration('api-server', { port: 3000, serveBot: false }, false);
  }

  isStarted() {
    return this.app !== undefined;
  }

  newRouter() {
    return ExpressApiApp.newRouter();
  }

  start(input = {}) {
    this.server = null;
    const port = input.port || this.settings.port;
    const expressApp = new ExpressApiApp(this.settings, this.plugins, this.routers);
    this.app = expressApp.initialize();
    this.serverLib = expressApp.express;

    if (!port || port < 1) {
      return false;
    }

    let expressServer;
    const fs = this.container.get('fs');
    let protocol = '';
    if (this.settings.key || this.settings.cert) {
      try {
        expressServer = https.createServer(
          {
            key: fs.readFileSync(this.settings.key),
            cert: fs.readFileSync(this.settings.cert),
          },
          this.app
        );
        protocol = 'https';
      } catch (error) {
        this.container.get('log').error('Error inititlising HTTPS server');
        throw error;
      }
    } else {
      expressServer = http.createServer(this.app);
      protocol = 'http';
    }
    this.server = expressServer.listen.apply(expressServer, [
      port,
      () => {
        const logger = this.container.get('logger');
        logger.info(`${this.settings.tag} listening on port ${port} using ${protocol}!`);
      },
    ]);
    return this.server !== null;
  }
}

module.exports = ExpressApiServer;
