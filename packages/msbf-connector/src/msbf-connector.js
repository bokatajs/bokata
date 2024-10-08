const { containerBootstrap } = require('@bokata/core');
const { Connector } = require('@bokata/connector');
const { BotFrameworkAdapter, ActivityTypes } = require('botbuilder');
const generateMsbfToken = require('./get-msbf-token');

class MsbfConnector extends Connector {
  constructor(settings = {}, container = undefined) {
    super(
      {
        settings: {},
        container: settings.container || container || containerBootstrap(),
      },
      container
    );
    this.applySettings(this.settings, settings);
    if (!this.settings.tag) {
      this.settings.tag = 'msbf';
    }
    this.applySettings(this.settings, this.container.getConfiguration(this.settings.tag));
  }

  start() {
    const server = this.container.get('api-server').app;
    if (!server) {
      throw new Error('No api-server found');
    }
    this.adapter = new BotFrameworkAdapter({
      appId: this.settings.appId || process.env.MSBF_BOT_APP_ID,
      appPassword: this.settings.botPassword || process.env.MSBF_BOT_APP_PASSWORD,
    });
    this.adapter.onTurnError = async (context) => {
      await context.sendActivity('Oops. Something went wrong!');
    };
    let routePath = this.settings.apiPath;
    if (routePath === undefined) {
      routePath = this.container.name || '';
    }
    if (routePath && !routePath.startsWith('/')) {
      routePath = `/${routePath}`;
    }
    routePath = routePath
      ? `${routePath}${this.settings.messagesPath || '/api/messages'}`
      : this.settings.messagesPath || '/api/messages';
    const logger = this.container.get('logger');
    logger.info(`Microsoft Bot Framework initialized at route ${routePath}`);
    server.get(`/token/:userId/channel/webchat`, generateMsbfToken);
    server.post(routePath, (req, res) => {
      this.adapter.processActivity(req, res, async (context) => {
        if (context.activity.type === ActivityTypes.Message) {
          try {
            const input = {
              message: context.activity.text,
              channel: `msbf-${context.activity.channelId}`,
              app: this.container.name,
              msbfContext: context,
            };
            if (this.onReceiveInput) {
              await this.onReceiveInput(input);
            }
            if (this.onHear) {
              await this.onHear(this, input);
            } else {
              const name = `${this.settings.tag}.hear`;
              const pipeline = this.container.getPipeline(name);
              if (pipeline) {
                this.container.runPipeline(pipeline, input, this);
              } else {
                const bot = this.settings.container.get('bot');
                if (bot) {
                  const session = this.createSession(context.activity);
                  session.parent = context;
                  await bot.process(session);
                } else {
                  const nlp = this.container.get('nlp');
                  if (nlp) {
                    const result = await nlp.process(input);
                    await this.say(result);
                  }
                }
              }
            }
          } catch (error) {
            console.error(error);
            await context.sendActivity('Oops. Something went wrong!');
          }
        }
      });
    });
  }

  async say(input, context) {
    let nlpjsCtx = context;
    if (!context) {
      context = input.msbfContext;
    }
    if (!context.sendActivity) {
      nlpjsCtx = context;
      context = context.parent;
    }
    if (input.answer) {
      await context.sendActivity(input.answer);
    } else {
      await context.sendActivity(input);
    }
    if (this.onSendOutput) {
      await this.onSendOutput(input, context, nlpjsCtx);
    }
  }
}

module.exports = MsbfConnector;
