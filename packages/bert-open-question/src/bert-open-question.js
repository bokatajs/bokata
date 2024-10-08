const { Clonable } = require('@bokata/core');

class BertOpenQuestion extends Clonable {
  constructor(settings = {}, container = undefined) {
    super(
      {
        settings: {},
        container: settings.container || container,
      },
      container
    );
    this.applySettings(this.settings, settings);
    if (!this.settings.tag) {
      this.settings.tag = 'open-question';
    }
    this.registerDefault();
    this.applySettings(this.settings, this.container.getConfiguration(this.settings.tag));
  }

  registerDefault() {
    this.container.registerConfiguration(
      'open-question',
      {
        url: process.env.OPEN_QUESTION_URL || 'http://localhost:8000/qna',
        'context-en':
          'The first book title is the philosopher stone. The second book title is the chamber of secrets. The third book is the prisioner of Azkaban',
      },
      false
    );
  }

  async getAnswer(locale, query) {
    const contextName = `context-${locale}`;
    if (!this.settings[contextName]) {
      return {
        answer: '',
        position: -1,
        score: 1,
      };
    }
    const request = this.container.get('request');
    const postData = `{ "text": "${encodeURIComponent(
      this.settings[contextName]
    )}", "query": "${encodeURIComponent(query)}"}`;
    const { url } = this.settings;
    const options = {
      url,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': postData.length,
      },
      postData,
    };
    const result = await request.get(options);
    return {
      answer: result[0][0],
      position: result[1][0],
      score: result[2][0],
    };
  }
}

module.exports = BertOpenQuestion;
