const { Nlu } = require('@bokata/nlu');
const { request } = require('@bokata/request');

class NluLuis extends Nlu {
  innerTrain(srcInput) {
    const input = srcInput;
    return input;
  }

  async innerProcess(srcInput) {
    const input = srcInput;
    const text =
      this.settings.useStemmer && input.tokens ? Object.keys(input.tokens).join(' ') : input.text || input.utterance;
    input.nluAnswer = await request(`${this.settings.luisUrl}${text}`);
    return input;
  }

  processUtterance(utterance) {
    return request(`${this.settings.luisUrl}${utterance}`);
  }

  registerDefault() {
    super.registerDefault();
    this.container.register('NluLuis', NluLuis, false);
  }

  fromCorpus(corpus, transformer) {
    const result = {
      luis_schema_version: '3.2.0',
      versionId: '0.1',
      name: corpus.name,
      desc: corpus.name,
      culture: corpus.locale.toLowerCase(),
      tokenizerVersion: '1.0.0',
      intents: [],
      entities: [],
      composites: [],
      closedLists: [],
      patternAnyEntities: [],
      regex_entities: [],
      prebuiltEntities: [],
      model_features: [],
      regex_features: [],
      patterns: [],
      utterances: [],
      settings: [],
    };
    corpus.data.forEach((item) => {
      result.intents.push({ name: item.intent });
      item.utterances.forEach((utterance) => {
        const tgtUtterance = transformer ? transformer(utterance, corpus.locale) : utterance;
        result.utterances.push({
          text: tgtUtterance,
          intent: item.intent,
          entities: [],
        });
      });
    });
    return result;
  }
}

module.exports = NluLuis;
