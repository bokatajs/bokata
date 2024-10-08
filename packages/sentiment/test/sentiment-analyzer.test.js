const container = require('./bootstrap');
const { SentimentAnalyzer } = require('../src');

describe('Sentiment Analyzer', () => {
  describe('Constructor', () => {
    test('Should create', () => {
      const analyzer = new SentimentAnalyzer({ container });
      expect(analyzer).toBeDefined();
    });
  });

  describe('Get Sentiment', () => {
    test('Get positive sentiment', async () => {
      const analyzer = new SentimentAnalyzer({ container });
      const utterance = 'I love my cat, is so cute!';
      const result = await analyzer.process({ locale: 'en', utterance });
      expect(result.sentiment).toBeDefined();
      expect(result.sentiment.score).toEqual(2.5);
      expect(result.sentiment.numWords).toEqual(7);
      expect(result.sentiment.numHits).toEqual(3);
      expect(result.sentiment.average).toEqual(0.35714285714285715);
      expect(result.sentiment.type).toEqual('afinn');
      expect(result.sentiment.locale).toEqual('en');
    });
    test('Get negative sentiment', async () => {
      const analyzer = new SentimentAnalyzer({ container });
      const utterance = 'I hate this, is not cute!';
      const result = await analyzer.process({ locale: 'en', utterance });
      expect(result.sentiment).toBeDefined();
      expect(result.sentiment.score).toEqual(-2);
      expect(result.sentiment.numWords).toEqual(6);
      expect(result.sentiment.numHits).toEqual(3);
      expect(result.sentiment.average).toEqual(-0.3333333333333333);
      expect(result.sentiment.type).toEqual('afinn');
      expect(result.sentiment.locale).toEqual('en');
    });
  });
});
