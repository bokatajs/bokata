const { uuid } = require('@bokata/core');
const { Connector } = require('@bokata/connector');

class RestConnector extends Connector {
  registerDefault() {
    this.container.registerConfiguration('rest', { log: true, channelId: 'rest' }, false);
  }

  log(level, message) {
    if (this.settings.log) {
      this.container.get('logger')[level](message);
    }
  }

  start() {
    const server = this.container.get('api-server').app;
    if (!server) {
      throw new Error('No api-server found');
    }
    if (!this.settings.apiTag) {
      this.settings.apiTag = '/rest';
    }

    server.get(`${this.settings.apiTag}/token`, async (req, res) => {
      this.log('debug', `GET ${this.settings.apiTag}/token`);
      const id = uuid();
      if (req.query && req.query.locale) {
        const contextManager = this.container.get('context-manager');
        if (contextManager) {
          const activity = { address: { conversation: { id } } };
          const context = await contextManager.getContext({ activity });
          if (context) {
            context.locale = req.query.locale;
          }
          await contextManager.setContext({ activity }, context);
        }
      }
      res.status(200).send({ id });
    });

    server.get(`${this.settings.apiTag}/talk`, async (req, res) => {
      this.log('debug', `GET ${this.settings.apiTag}/talk`);
      console.log(req.query);
      const bot = this.container.get('bot');
      if (bot) {
        const session = this.createSession({
          channelId: 'rest',
          text: req.query.text,
          conversation: { id: req.query.conversationId },
          address: { conversation: { id: req.query.conversationId } },
        });
        session.res = res;
        session.req = req;
        await bot.process(session);
      }
    });
  }

  say(activity, session) {
    if (session.res) {
      session.res.status(200).send(activity);
    }
  }
}

module.exports = RestConnector;
