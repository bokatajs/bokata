const { FullBot } = require('../src');

describe('FullBot', () => {
  describe('constructor', () => {
    test('It should create a new instance', () => {
      const bot = new FullBot();
      expect(bot).toBeDefined();
    });
  });

  describe('start', () => {
    test('It should start the bot', async () => {
      const bot = new FullBot({
        scripts: ['./packages/fullbot/test/script.dlg'],
      });
      await bot.start();
      expect(bot.container).toBeDefined();
      bot.stop();
    });
  });
});
