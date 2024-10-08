const { SentimentAnalyzer: SentimentAnalyzerBase } = require('@bokata/sentiment');
const { LangAll } = require('@bokata/lang-all');
const { Nlu } = require('@bokata/nlu');

class SentimentAnalyzer extends SentimentAnalyzerBase {
  constructor(settings = {}, container = undefined) {
    super(settings, container);
    this.container.use(LangAll);
    this.container.use(Nlu);
  }

  async getSentiment(utterance, locale = 'en', settings = {}) {
    const input = {
      utterance,
      locale,
      ...settings,
    };
    const result = await this.process(input);
    return result.sentiment;
  }
}

module.exports = SentimentAnalyzer;
