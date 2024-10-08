const path = require('path');
const fs = require('fs');
const { NlpAnalyzer } = require('../src');

const corpus = {
  name: 'test',
  locale: 'en-US',
  data: [
    {
      intent: 'intent1',
      utterances: ['utterance1-1'],
      tests: ['test1-1', 'test1-2'],
    },
    {
      intent: 'intent2',
      utterances: ['utterance2-1'],
      tests: ['test2-1', 'test2-2', 'test2-3'],
    },
  ],
};

function train() {
  return {};
}

function process(test) {
  return {
    classifications: [
      { intent: test === 'test2-1' ? 'intent2' : 'intent1', score: 0.9 },
      { intent: test === 'test2-1' ? 'intent1' : 'intent2', score: 0.2 },
    ],
  };
}

describe('NLP Analyzer', () => {
  describe('constructor', () => {
    it('Should create a new instance', () => {
      const analyzer = new NlpAnalyzer({ threshold: 0.2 });
      expect(analyzer).toBeDefined();
      expect(analyzer.threshold).toEqual(0.2);
    });
  });

  describe('analyze', () => {
    it('Should return an analysis', async () => {
      const analyzer = new NlpAnalyzer();
      const analysis = await analyzer.analyze(corpus, train, process);
      expect(analysis).toBeDefined();
    });
  });

  describe('generate excel', () => {
    it('Should generate an excel file', async () => {
      const analyzer = new NlpAnalyzer();
      const analysis = await analyzer.analyze(corpus, train, process);
      const fileName = path.join(__dirname, './test-excel.xlsx');
      await analyzer.generateExcel(fileName, analysis);
      const exists = fs.existsSync(fileName);
      expect(exists).toBeTruthy();
      if (exists) {
        fs.unlinkSync(fileName);
      }
    });
  });
});
