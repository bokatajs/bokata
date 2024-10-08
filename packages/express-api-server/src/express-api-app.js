const express = require('express');
const cors = require('cors');
const path = require('path');
const { logger } = require('@bokata/core');

class ExpressApiApp {
  constructor(settings, plugins, routers) {
    this.settings = settings || {};
    this.plugins = plugins || [];
    this.routers = routers || [];
    this.express = express;
  }

  static newRouter() {
    return express.Router();
  }

  initialize() {
    this.app = express();
    this.app.use(cors());
    this.app.use(express.urlencoded({ extended: false }));
    this.app.use(express.json());

    this.loadComplements();

    return this.app;
  }

  loadComplements() {
    for (let i = 0; i < this.plugins.length; i += 1) {
      const plugin = this.plugins[i];
      logger.debug(`Loading plugin: ${plugin.name}`);
      this.app.use(plugin);
    }
    if (this.settings.serveBot) {
      const clientPath = this.settings.clientPath || path.join(__dirname, './public');
      logger.debug(`Serving bot client (path: ${clientPath}`);
      this.app.use(express.static(clientPath));
    }
    for (let i = 0; i < this.routers.length; i += 1) {
      const router = this.routers[i];
      const routes = router.stack.map((layer) => layer.route.path);
      logger.debug(`Loading custom router: ${JSON.stringify(routes, null, 2)}`);
      this.app.use(this.settings.apiRoot, router);
    }
  }
}

module.exports = ExpressApiApp;
