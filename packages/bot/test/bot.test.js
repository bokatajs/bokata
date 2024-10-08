const fs = require('fs');
const { containerBootstrap } = require('@bokata/core');
const { Nlp } = require('@bokata/nlp');
const { Bot, TestConnector } = require('../src');
const MockTemplate = require('./mock-template');

const container = containerBootstrap();
container.use(Nlp);
container.register('fs', {
  readFile: (file) => fs.readFileSync(file, 'utf-8'),
  writeFile: () => {},
});
container.register('Template', new MockTemplate(), true);

describe('Bot', () => {
  describe('Constructor', () => {
    test('It should create a new instance', () => {
      const bot = new Bot({ container });
      expect(bot).toBeDefined();
    });
  });

  describe('loadScript', () => {
    test('It should be able to load several scripts', async () => {
      const bot = new Bot({ container });
      await bot.start();
      await bot.loadScript(['./packages/bot/test/script1.dlg', './packages/bot/test/script2.dlg']);
    });
  });

  describe('process', () => {
    test('It should be able to process a conversation', async () => {
      const bot = new Bot({ container });
      bot.registerAction('uppers', (session, context, params) => {
        context[params.name] = (context[params.name] || '').toUpperCase();
        session.say('(Converting name to uppercases...)');
      });
      container.register('bot', bot, true);
      await bot.start();
      await bot.loadScript([
        './packages/bot/test/script1.dlg',
        './packages/bot/test/script2.dlg',
        './packages/bot/test/script3.dlg',
      ]);
      const connector = new TestConnector({ container });
      await connector.runScript('./packages/bot/test/scenario01.dlt');
      expect(connector.messages).toEqual(connector.expected);
      const nlp = container.get('nlp');
      const result = await nlp.process('who are you');
      expect(result.answer).toEqual('Think of me as a virtual agent');
    });
    test('It should be able to process a conversation with multilanguage', async () => {
      const bot = new Bot({ container });
      container.register('bot', bot, true);
      await bot.start();
      await bot.loadScript(['./packages/bot/test/script4.dlg']);
      const connector = new TestConnector({ container });
      await connector.runScript('./packages/bot/test/scenario02.dlt');
      expect(connector.messages).toEqual(connector.expected);
    });
    test('It should be able to process a conversation with fallback locale', async () => {
      const bot = new Bot({ container });
      container.register('bot', bot, true);
      await bot.start();
      await bot.loadScript(['./packages/bot/test/script5.dlg']);
      const connector = new TestConnector({ container });
      await connector.runScript('./packages/bot/test/scenario05-01.dlt');
      expect(connector.messages).toEqual(connector.expected);
    });
    test('It should be able to process a conversation with fallback locale falling', async () => {
      const bot = new Bot({ container });
      container.register('bot', bot, true);
      await bot.start();
      await bot.loadScript(['./packages/bot/test/script5.dlg']);
      const connector = new TestConnector({ container });
      await connector.runScript('./packages/bot/test/scenario05-02.dlt');
      expect(connector.messages).toEqual(connector.expected);
    });
  });
});
