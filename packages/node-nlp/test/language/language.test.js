const { Language } = require('../../src/language');

describe('Language', () => {
  describe('constructor', () => {
    it('Should create an instance', () => {
      const language = new Language();
      expect(language).toBeDefined();
    });
  });

  describe('Transform allow list', () => {
    test('It should translate ISO2 to ISO3', () => {
      const language = new Language();
      const list = ['en', 'es'];
      const result = language.transformAllowList(list);
      expect(result).toEqual(['eng', 'spa']);
    });
    test('It should not transform entries already in ISO3', () => {
      const language = new Language();
      const list = ['en', 'spa'];
      const result = language.transformAllowList(list);
      expect(result).toEqual(['eng', 'spa']);
    });
    test('It should not add invalid languages', () => {
      const language = new Language();
      const list = ['en', 'es', 'me'];
      const result = language.transformAllowList(list);
      expect(result).toEqual(['eng', 'spa']);
    });
  });

  describe('guess', () => {
    it('Should return so much scores', () => {
      const language = new Language();
      const guess = language.guess('I want to eat something');
      expect(guess.length).toBeGreaterThan(10);
    });
    it('Should identify the language of an utterance', () => {
      const language = new Language();
      let guess = language.guess('When the night has come And the land is dark And the moon is the only light we see');
      expect(guess[0].alpha3).toEqual('eng');
      expect(guess[0].alpha2).toEqual('en');
      expect(guess[0].language).toEqual('English');
      expect(guess[0].score).toEqual(1);
      guess = language.guess('Cuando ha llegado la noche Y la tierra está oscura Y la luna es la única luz que vemos');
      expect(guess[0].alpha3).toEqual('spa');
      expect(guess[0].alpha2).toEqual('es');
      expect(guess[0].language).toEqual('Spanish');
      expect(guess[0].score).toEqual(1);
      guess = language.guess("Quan ha arribat la nit, la terra és fosca i la lluna és l'única llum que veiem");
      expect(guess[0].alpha3).toEqual('cat');
      expect(guess[0].alpha2).toEqual('ca');
      expect(guess[0].language).toEqual('Catalan');
      expect(guess[0].score).toEqual(1);
    });
    it('Should allow to indicate a limit of responses', () => {
      const language = new Language();
      let guess = language.guess(
        'When the night has come And the land is dark And the moon is the only light we see',
        null,
        3
      );
      expect(guess).toHaveLength(3);
      expect(guess[0].alpha3).toEqual('eng');
      expect(guess[0].alpha2).toEqual('en');
      expect(guess[0].language).toEqual('English');
      expect(guess[0].score).toEqual(1);
      guess = language.guess(
        'Cuando ha llegado la noche Y la tierra está oscura Y la luna es la única luz que vemos',
        null,
        2
      );
      expect(guess).toHaveLength(2);
      expect(guess[0].alpha3).toEqual('spa');
      expect(guess[0].alpha2).toEqual('es');
      expect(guess[0].language).toEqual('Spanish');
      expect(guess[0].score).toEqual(1);
      guess = language.guess("Quan ha arribat la nit, la terra és fosca i la lluna és l'única llum que veiem", null, 1);
      expect(guess).toHaveLength(1);
      expect(guess[0].alpha3).toEqual('cat');
      expect(guess[0].alpha2).toEqual('ca');
      expect(guess[0].language).toEqual('Catalan');
      expect(guess[0].score).toEqual(1);
    });
    it('Should allow to pass an allow list of languages', () => {
      const language = new Language();
      const keys = Object.keys(language.languagesAlpha2);
      keys.splice(keys.indexOf('en'), 1);
      const guess = language.guess(
        'When the night has come And the land is dark And the moon is the only light we see',
        keys
      );
      expect(guess[0].alpha3).toEqual('deu');
      expect(guess[0].alpha2).toEqual('de');
      expect(guess[0].language).toEqual('German');
      expect(guess[0].score).toEqual(1);
    });
  });

  describe('guess best', () => {
    it('Should identify the language of an utterance', () => {
      const language = new Language();
      let guess = language.guessBest(
        'When the night has come And the land is dark And the moon is the only light we see'
      );
      expect(guess.alpha3).toEqual('eng');
      expect(guess.alpha2).toEqual('en');
      expect(guess.language).toEqual('English');
      expect(guess.score).toEqual(1);
      guess = language.guessBest(
        'Cuando ha llegado la noche Y la tierra está oscura Y la luna es la única luz que vemos'
      );
      expect(guess.alpha3).toEqual('spa');
      expect(guess.alpha2).toEqual('es');
      expect(guess.language).toEqual('Spanish');
      expect(guess.score).toEqual(1);
      guess = language.guessBest("Quan ha arribat la nit, la terra és fosca i la lluna és l'única llum que veiem");
      expect(guess.alpha3).toEqual('cat');
      expect(guess.alpha2).toEqual('ca');
      expect(guess.language).toEqual('Catalan');
      expect(guess.score).toEqual(1);
    });
    it('Should allow to pass an allow list of languages', () => {
      const language = new Language();
      const keys = Object.keys(language.languagesAlpha2);
      keys.splice(keys.indexOf('en'), 1);
      const guess = language.guessBest(
        'When the night has come And the land is dark And the moon is the only light we see',
        keys
      );
      expect(guess.alpha3).toEqual('deu');
      expect(guess.alpha2).toEqual('de');
      expect(guess.language).toEqual('German');
      expect(guess.score).toEqual(1);
    });
  });
});
