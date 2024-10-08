const { Connector } = require('@bokata/connector');
const { dialogflow } = require('actions-on-google');

class DialogflowConnector extends Connector {
  initialize() {
    this.app = dialogflow();
    this.app.intent('Default Fallback Intent', async (conv) => {
      await this.hear(conv);
    });
    const server = this.container.get('api-server').app;
    if (!this.settings.apiTag) {
      this.settings.apiTag = '/fulfillment';
    }
    server.post(this.settings.apiTag, this.app);
  }

  async hear(conv) {
    if (conv.body.queryResult.queryText) {
      if (this.onHear) {
        await this.onHear(this, conv);
      } else {
        const bot = this.container.get('bot');
        if (bot) {
          let conversationId;
          if (conv.request && conv.request.conversation) {
            conversationId = conv.request.conversation.conversationId;
          }
          if (!conversationId) {
            conversationId = conv.body.session;
          }
          const session = this.createSession({
            channelId: 'dialogflow',
            text: conv.body.queryResult.queryText,
            address: {
              conversation: { id: conversationId },
            },
          });
          session.conv = conv;
          await bot.process(session);
        } else {
          const nlp = this.container.get('nlp');
          if (nlp) {
            const result = await nlp.process(
              {
                message: conv.body.queryResult.queryText,
                channel: 'dialogflow',
                app: this.container.name,
              },
              undefined,
              this.context
            );
            this.say({ text: result.answer }, { connector: { conv } });
          }
        }
      }
    }
  }

  say(message, session) {
    session.conv.ask(message.text);
  }
}

module.exports = DialogflowConnector;
