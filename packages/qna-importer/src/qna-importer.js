class QnaImporter {
  constructor(container) {
    this.container = container ? container.container || container : undefined;
    this.name = 'qna-importer';
  }

  answerHash(answer) {
    return answer.toLowerCase().replace(' ', '_');
  }

  transform(content, inputOptions) {
    const options = {
      separator: '\t',
      hasHeader: false,
      questionPos: 0,
      answerPos: 1,
      locale: 'es',
      ...inputOptions,
    };
    const result = {};
    const lines = content.split(/\r?\n/);
    const start = options.hasHeader ? 1 : 0;
    for (let i = start; i < lines.length; i += 1) {
      const line = lines[i];
      const tokens = line.split(options.separator);
      const question = tokens[options.questionPos];
      const answer = tokens[options.answerPos];
      if (question && answer) {
        const { locale } = options;
        if (!result[locale]) {
          result[locale] = {};
        }
        const hash = this.answerHash(answer);
        if (!result[locale][hash]) {
          result[locale][hash] = {
            utterances: {},
            answers: {},
          };
        }
        result[locale][hash].utterances[question] = 1;
        result[locale][hash].answers[answer] = 1;
      }
    }
    const corpora = [];
    const locales = Object.keys(result);
    for (let i = 0; i < locales.length; i += 1) {
      const locale = locales[i];
      const corpus = {
        locale,
        name: `corpus_${locale}`,
        data: [],
      };
      corpora.push(corpus);
      const intents = Object.keys(result[locale]);
      for (let j = 0; j < intents.length; j += 1) {
        const intent = intents[j];
        const utterances = Object.keys(result[locale][intent].utterances);
        const answers = Object.keys(result[locale][intent].answers);
        const intentData = {
          intent,
          utterances,
          answers,
        };
        corpus.data.push(intentData);
      }
    }
    return corpora;
  }
}

module.exports = QnaImporter;
