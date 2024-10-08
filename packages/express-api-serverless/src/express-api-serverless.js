const { defaultContainer, Clonable } = require('@bokata/core');
const express = require('serverless-express/express');

class ExpressApiServerless extends Clonable {
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
  }

  registerDefault() {
    this.container.registerConfiguration('api-server', {}, false);
  }

  isStarted() {
    return this.app !== undefined;
  }

  start() {
    this.app = express();
    this.app.use(express.urlencoded({ extended: false }));
    this.app.use(express.json());
    const logger = this.container.get('logger');
    logger.info(`${this.settings.tag} started as serverless`);
  }
}

module.exports = ExpressApiServerless;
