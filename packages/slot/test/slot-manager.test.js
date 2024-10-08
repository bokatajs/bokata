const { SlotManager } = require('../src');

describe('Slot Manager', () => {
  describe('Constructor', () => {
    test('It should create an instance', () => {
      const manager = new SlotManager();
      expect(manager).toBeDefined();
    });
    test('It should initialize properties', () => {
      const manager = new SlotManager();
      expect(manager.intents).toEqual({});
    });
  });

  describe('Add slot', () => {
    test('I can add a new slot', () => {
      const manager = new SlotManager();
      const slot = manager.addSlot('intent', 'entity');
      expect(slot).toEqual({
        intent: 'intent',
        entity: 'entity',
        mandatory: false,
        locales: {},
      });
    });
    test('I can set the slot to be mandatory', () => {
      const manager = new SlotManager();
      const slot = manager.addSlot('intent', 'entity', true);
      expect(slot).toEqual({
        intent: 'intent',
        entity: 'entity',
        mandatory: true,
        locales: {},
      });
    });
    test('I can set questions by language to the slot', () => {
      const manager = new SlotManager();
      const questions = {
        en: 'Enter the entity',
        es: 'Dime la entidad',
      };
      const slot = manager.addSlot('intent', 'entity', true, questions);
      expect(slot).toEqual({
        intent: 'intent',
        entity: 'entity',
        mandatory: true,
        locales: {
          en: 'Enter the entity',
          es: 'Dime la entidad',
        },
      });
    });
  });
  describe('Update slot', () => {
    test('A not existing slot is created with default mandatory flag', () => {
      const manager = new SlotManager();
      const questions = {
        en: 'Enter the entity',
      };
      const slot = manager.updateSlot('intent', 'entity', undefined, questions);
      expect(slot).toEqual({
        intent: 'intent',
        entity: 'entity',
        mandatory: false,
        locales: {
          en: 'Enter the entity',
        },
      });
    });
    test('I can add questions by language to the slot', () => {
      const manager = new SlotManager();
      const questions = {
        en: 'Enter the entity',
        es: 'Dime la entidad',
      };
      const addedQuestions = {
        de: 'Bitte wählen Sie eine Entität',
      };
      manager.addSlot('intent', 'entity', true, questions);
      const slot = manager.updateSlot('intent', 'entity', undefined, addedQuestions);
      expect(slot).toEqual({
        intent: 'intent',
        entity: 'entity',
        mandatory: true,
        locales: {
          en: 'Enter the entity',
          es: 'Dime la entidad',
          de: 'Bitte wählen Sie eine Entität',
        },
      });
    });
    test('I can update questions by language to the slot', () => {
      const manager = new SlotManager();
      const questions = {
        en: 'Enter the entity',
        es: 'Dime la entidad',
      };
      const addedQuestions = {
        en: 'Enter the entity really',
      };
      manager.addSlot('intent', 'entity', true, questions);
      const slot = manager.updateSlot('intent', 'entity', undefined, addedQuestions);
      expect(slot).toEqual({
        intent: 'intent',
        entity: 'entity',
        mandatory: true,
        locales: {
          en: 'Enter the entity really',
          es: 'Dime la entidad',
        },
      });
    });
    test('I can update mandatory flag by language to the slot', () => {
      const manager = new SlotManager();
      const questions = {
        en: 'Enter the entity',
        es: 'Dime la entidad',
      };
      manager.addSlot('intent', 'entity', true, questions);
      const slot = manager.updateSlot('intent', 'entity', false);
      expect(slot).toEqual({
        intent: 'intent',
        entity: 'entity',
        mandatory: false,
        locales: {
          en: 'Enter the entity',
          es: 'Dime la entidad',
        },
      });
    });
  });
  describe('Get Slot', () => {
    test('I can get an slot', () => {
      const manager = new SlotManager();
      const questions = {
        en: 'Enter the entity',
        es: 'Dime la entidad',
      };
      manager.addSlot('intent', 'entity', true, questions);
      const slot = manager.getSlot('intent', 'entity');
      expect(slot).toEqual({
        intent: 'intent',
        entity: 'entity',
        mandatory: true,
        locales: {
          en: 'Enter the entity',
          es: 'Dime la entidad',
        },
      });
    });
    test('If the entity does not exists should return undefined', () => {
      const manager = new SlotManager();
      manager.addSlot('intent', 'entity');
      const slot = manager.getSlot('intent', 'entit');
      expect(slot).toBeUndefined();
    });
    test('If the intent does not exists should return undefined', () => {
      const manager = new SlotManager();
      manager.addSlot('intent', 'entity');
      const slot = manager.getSlot('inten', 'entity');
      expect(slot).toBeUndefined();
    });
  });

  describe('Exists Slot', () => {
    test('Should return true if the slot exists', () => {
      const manager = new SlotManager();
      manager.addSlot('intent', 'entity');
      const actual = manager.existsSlot('intent', 'entity');
      expect(actual).toBeTruthy();
    });
    test('If the entity does not exists should return false', () => {
      const manager = new SlotManager();
      manager.addSlot('intent', 'entity');
      const actual = manager.existsSlot('intent', 'entit');
      expect(actual).toBeFalsy();
    });
    test('If the intent does not exists should return false', () => {
      const manager = new SlotManager();
      manager.addSlot('intent', 'entity');
      const actual = manager.existsSlot('inten', 'entity');
      expect(actual).toBeFalsy();
    });
  });

  describe('Remove Slot', () => {
    test('Should remove a slot', () => {
      const manager = new SlotManager();
      manager.addSlot('intent', 'entity');
      manager.removeSlot('intent', 'entity');
      const actual = manager.existsSlot('intent', 'entity');
      expect(actual).toBeFalsy();
    });
    test('Should do nothing if the entity does not exists', () => {
      const manager = new SlotManager();
      manager.addSlot('intent', 'entity');
      manager.removeSlot('intent', 'entit');
      const actual = manager.existsSlot('intent', 'entity');
      expect(actual).toBeTruthy();
    });
    test('Should do nothing if the intent does not exists', () => {
      const manager = new SlotManager();
      manager.addSlot('intent', 'entity');
      manager.removeSlot('inten', 'entity');
      const actual = manager.existsSlot('intent', 'entity');
      expect(actual).toBeTruthy();
    });
  });

  describe('Add Batch', () => {
    test('Should add several entities to an intent', () => {
      const manager = new SlotManager();
      manager.addBatch('intent', ['entity1', 'entity2']);
      const actual1 = manager.existsSlot('intent', 'entity1');
      expect(actual1).toBeTruthy();
      const actual2 = manager.existsSlot('intent', 'entity2');
      expect(actual2).toBeTruthy();
    });
    test('If no entity is provided do nothing', () => {
      const manager = new SlotManager();
      manager.addBatch('intent', []);
      const actual = manager.existsSlot('intent', 'entity1');
      expect(actual).toBeFalsy();
    });
    test('If entity is undefined do nothing', () => {
      const manager = new SlotManager();
      manager.addBatch('intent');
      const actual = manager.existsSlot('intent', 'entity1');
      expect(actual).toBeFalsy();
    });
    test("If an entity already exists don't replace it", () => {
      const manager = new SlotManager();
      const questions = {
        en: 'Enter the entity',
        es: 'Dime la entidad',
      };
      manager.addSlot('intent', 'entity2', true, questions);
      manager.addBatch('intent', ['entity1', 'entity2']);
      const slot = manager.getSlot('intent', 'entity2');
      expect(slot).toEqual({
        intent: 'intent',
        entity: 'entity2',
        mandatory: true,
        locales: {
          en: 'Enter the entity',
          es: 'Dime la entidad',
        },
      });
      const actual = manager.existsSlot('intent', 'entity1');
      expect(actual).toBeTruthy();
    });
  });
  describe('Get intent entity names', () => {
    test('It should return a list with the name of the entities', () => {
      const manager = new SlotManager();
      manager.addBatch('intent', ['entity1', 'entity2']);
      const actual = manager.getIntentEntityNames('intent');
      expect(actual).toEqual(['entity1', 'entity2']);
    });
    test('If the intent does not exists return undefined', () => {
      const manager = new SlotManager();
      const actual = manager.getIntentEntityNames('intent');
      expect(actual).toBeUndefined();
    });
  });
  describe('Clear', () => {
    test('It should empty the intents property', () => {
      const manager = new SlotManager();
      manager.addBatch('intent', ['entity1', 'entity2']);
      manager.clear();
      expect(manager.intents).toEqual({});
    });
  });
  describe('Load', () => {
    test('It should load', () => {
      const manager = new SlotManager();
      const src = {
        intent: 'intent',
        entity: 'entity2',
        mandatory: true,
        locales: {
          en: 'Enter the entity',
          es: 'Dime la entidad',
        },
      };
      manager.load({
        intent: {
          entity: src,
        },
      });
      const slot = manager.getSlot('intent', 'entity');
      expect(slot).toEqual(src);
    });
    test('It should clear if undefined is provided', () => {
      const manager = new SlotManager();
      manager.addBatch('intent', ['entity1', 'entity2']);
      manager.load();
      expect(manager.intents).toEqual({});
    });
  });
  describe('Get mandatory slots', () => {
    test('It should return an object with mandatory slots', () => {
      const manager = new SlotManager();
      manager.addSlot('intent', 'entity1', true);
      manager.addSlot('intent', 'entity2', true);
      manager.addSlot('intent', 'entity3', false);
      manager.addSlot('intent', 'entity4', true);
      const slots = manager.getMandatorySlots('intent');
      expect(slots).toEqual({
        entity1: {
          intent: 'intent',
          entity: 'entity1',
          mandatory: true,
          locales: {},
        },
        entity2: {
          intent: 'intent',
          entity: 'entity2',
          mandatory: true,
          locales: {},
        },
        entity4: {
          intent: 'intent',
          entity: 'entity4',
          mandatory: true,
          locales: {},
        },
      });
    });
  });
  describe('Process', () => {
    test('If result has intent and context has not slot fill, should exit process', () => {
      const manager = new SlotManager();
      const result = {
        intent: 'blau',
      };
      const context = {};
      const actual = manager.process(result, context);
      expect(actual).toBeFalsy();
      expect(result).toEqual({ intent: 'blau' });
    });
    test('If result has no intent, and context has not slot fill, should exit process', () => {
      const manager = new SlotManager();
      const result = {
        intent: undefined,
        score: 1,
      };
      const context = {};
      const actual = manager.process(result, context);
      expect(actual).toBeFalsy();
      expect(result).toEqual({ intent: undefined, score: 1 });
    });
    test('If result has no intent, and context has slot fill, should fill result from slot fill', () => {
      const manager = new SlotManager();
      const result = {
        intent: undefined,
        utterance: 'hello',
        score: 1,
        entities: [],
      };
      const context = {
        slotFill: {
          intent: 'intent',
          answer: 'answer',
          srcAnswer: 'srcAnswer',
          entities: [],
        },
      };
      const actual = manager.process(result, context);
      expect(actual).toBeFalsy();
      expect(result).toEqual({
        intent: 'intent',
        utterance: 'hello',
        answer: 'answer',
        srcAnswer: 'srcAnswer',
        score: 1,
        entities: [],
      });
    });
    test('On initial slotfill, fill in but leave latestFilled empty', () => {
      const manager = new SlotManager();
      manager.addSlot('intent', 'entity1', true);
      const result = {
        intent: 'intent',
        utterance: 'hello John',
        score: 1,
        entities: [
          {
            sourceText: 'John',
            utteranceText: 'John',
            entity: 'entity1',
          },
        ],
      };
      const context = {};
      const actual = manager.process(result, context);
      expect(actual).toBeTruthy();
      expect(result).toEqual({
        intent: 'intent',
        utterance: 'hello John',
        score: 1,
        entities: [
          {
            entity: 'entity1',
            utteranceText: 'John',
            sourceText: 'John',
          },
        ],
      });
    });
    test('On initial slotfill, fill in but leave latestFilled empty, and ask for another entity', () => {
      const manager = new SlotManager();
      manager.addSlot('intent', 'entity1', true);
      manager.addSlot('intent', 'entity2', true, { en: 'answer' });
      const result = {
        intent: 'intent',
        utterance: 'hello John',
        score: 1,
        localeIso2: 'en',
        entities: [
          {
            sourceText: 'John',
            utteranceText: 'John',
            entity: 'entity1',
          },
        ],
      };
      const context = {};
      const actual = manager.process(result, context);
      expect(actual).toBeTruthy();
      expect(result).toEqual({
        intent: 'intent',
        utterance: 'hello John',
        score: 1,
        localeIso2: 'en',
        entities: [
          {
            entity: 'entity1',
            utteranceText: 'John',
            sourceText: 'John',
          },
        ],
        slotFill: {
          currentSlot: 'entity2',
          entities: [
            {
              entity: 'entity1',
              utteranceText: 'John',
              sourceText: 'John',
            },
          ],
          intent: 'intent',
          localeIso2: 'en',
        },
        srcAnswer: 'answer',
      });
    });
    test('If slot fill is waiting for an entity, fill the entity', () => {
      const manager = new SlotManager();
      manager.addSlot('intent', 'entity1', true);
      const result = {
        intent: undefined,
        utterance: 'hello',
        score: 1,
        entities: [],
      };
      const context = {
        slotFill: {
          currentSlot: 'entity1',
          intent: 'intent',
          answer: 'answer',
          srcAnswer: 'srcAnswer',
          entities: [],
        },
      };
      const actual = manager.process(result, context);
      expect(actual).toBeTruthy();
      expect(result).toEqual({
        intent: 'intent',
        utterance: 'hello',
        answer: 'answer',
        score: 1,
        entities: [
          {
            entity: 'entity1',
            utteranceText: 'hello',
            sourceText: 'hello',
            accuracy: 0.95,
            start: 0,
            end: 4,
            len: 5,
            isSlotFillingFallback: true,
          },
        ],
      });
    });
    test('If slot fill is waiting for an entity and builtin parsed it, use the found builtin entity', () => {
      const manager = new SlotManager();
      manager.addSlot('intent', 'duration', true);
      const result = {
        intent: undefined,
        utterance: 'For twenty minutes',
        score: 1,
        entities: [
          {
            start: 4,
            end: 18,
            len: 15,
            accuracy: 0.95,
            sourceText: 'twenty minutes',
            utteranceText: 'twenty minutes',
            entity: 'duration',
            resolution: {
              strValue: '1200',
              value: 1200,
              unit: 'second',
            },
          },
        ],
      };
      const context = {
        slotFill: {
          currentSlot: 'duration',
          intent: 'intent',
          answer: 'answer',
          srcAnswer: 'srcAnswer',
          entities: [],
        },
      };
      const actual = manager.process(result, context);
      expect(actual).toBeTruthy();
      expect(result).toEqual({
        intent: 'intent',
        utterance: 'For twenty minutes',
        answer: 'answer',
        score: 1,
        entities: [
          {
            start: 4,
            end: 18,
            len: 15,
            accuracy: 0.95,
            sourceText: 'twenty minutes',
            utteranceText: 'twenty minutes',
            entity: 'duration',
            resolution: {
              strValue: '1200',
              value: 1200,
              unit: 'second',
            },
          },
        ],
      });
    });
    test('If there are slots left, pick the next one', () => {
      const manager = new SlotManager();
      manager.addSlot('intent', 'entity1', true, { en: 'Enter entity1' });
      manager.addSlot('intent', 'entity2', true, { en: 'Enter entity2' });
      manager.addSlot('intent', 'entity3', true, { en: 'Enter entity3' });
      const result = {
        intent: undefined,
        utterance: 'hello',
        score: 1,
        entities: [],
      };
      const context = {
        slotFill: {
          currentSlot: 'entity1',
          intent: 'intent',
          answer: 'answer',
          srcAnswer: 'srcAnswer',
          entities: [],
          localeIso2: 'en',
        },
      };
      const actual = manager.process(result, context);
      expect(actual).toBeTruthy();
      expect(result).toEqual({
        intent: 'intent',
        localeIso2: 'en',
        utterance: 'hello',
        answer: 'answer',
        srcAnswer: 'Enter entity2',
        score: 1,
        entities: [
          {
            entity: 'entity1',
            utteranceText: 'hello',
            sourceText: 'hello',
            accuracy: 0.95,
            start: 0,
            end: 4,
            len: 5,
            isSlotFillingFallback: true,
          },
        ],
        slotFill: {
          answer: 'answer',
          currentSlot: 'entity2',
          entities: [
            {
              accuracy: 0.95,
              end: 4,
              entity: 'entity1',
              len: 5,
              sourceText: 'hello',
              start: 0,
              utteranceText: 'hello',
              isSlotFillingFallback: true,
            },
          ],
          intent: 'intent',
          latestSlot: 'entity1',
          localeIso2: 'en',
          srcAnswer: 'srcAnswer',
        },
      });
    });
    test('If there are slots left, pick the next one, also with numbered entities', () => {
      const manager = new SlotManager();
      manager.addSlot('intent', 'entity1_0', true, { en: 'Enter entity1-0' });
      manager.addSlot('intent', 'entity1_1', true, { en: 'Enter entity1-1' });
      manager.addSlot('intent', 'entity2', true, { en: 'Enter entity2' });
      const result = {
        intent: undefined,
        utterance: 'hello',
        score: 1,
        entities: [
          {
            entity: 'entity1',
            utteranceText: 'entity1-0',
            sourceText: 'entity1-0',
            accuracy: 0.95,
            start: 0,
            end: 4,
            len: 5,
          },
          {
            entity: 'entity1',
            utteranceText: 'entity1-1',
            sourceText: 'entity1-1',
            accuracy: 0.95,
            start: 0,
            end: 4,
            len: 5,
          },
        ],
      };
      const context = {
        slotFill: {
          currentSlot: 'entity1_1',
          intent: 'intent',
          answer: 'answer',
          srcAnswer: 'srcAnswer',
          entities: [],
          localeIso2: 'en',
        },
      };
      const actual = manager.process(result, context);
      expect(actual).toBeTruthy();
      expect(result).toEqual({
        intent: 'intent',
        localeIso2: 'en',
        utterance: 'hello',
        answer: 'answer',
        srcAnswer: 'Enter entity2',
        score: 1,
        entities: [
          {
            entity: 'entity1',
            utteranceText: 'entity1-0',
            sourceText: 'entity1-0',
            accuracy: 0.95,
            start: 0,
            end: 4,
            len: 5,
          },
          {
            entity: 'entity1',
            utteranceText: 'entity1-1',
            sourceText: 'entity1-1',
            accuracy: 0.95,
            start: 0,
            end: 4,
            len: 5,
          },
        ],
        slotFill: {
          answer: 'answer',
          currentSlot: 'entity2',
          entities: [
            {
              entity: 'entity1',
              utteranceText: 'entity1-0',
              sourceText: 'entity1-0',
              accuracy: 0.95,
              start: 0,
              end: 4,
              len: 5,
            },
            {
              entity: 'entity1',
              utteranceText: 'entity1-1',
              sourceText: 'entity1-1',
              accuracy: 0.95,
              start: 0,
              end: 4,
              len: 5,
            },
          ],
          intent: 'intent',
          latestSlot: 'entity1_1',
          localeIso2: 'en',
          srcAnswer: 'srcAnswer',
        },
      });
    });
    test('If there are slots left, pick the next one, also with auto filling a numbered entity', () => {
      const manager = new SlotManager();
      manager.addSlot('intent', 'entity1_0', true, { en: 'Enter entity1-0' });
      manager.addSlot('intent', 'entity1_1', true, { en: 'Enter entity1-1' });
      manager.addSlot('intent', 'entity2', true, { en: 'Enter entity2' });
      const result = {
        intent: undefined,
        utterance: 'hello',
        score: 1,
        entities: [
          {
            entity: 'entity1',
            utteranceText: 'entity1-0',
            sourceText: 'entity1-0',
            accuracy: 0.95,
            start: 0,
            end: 4,
            len: 5,
          },
        ],
      };
      const context = {
        slotFill: {
          currentSlot: 'entity1_1',
          intent: 'intent',
          answer: 'answer',
          srcAnswer: 'srcAnswer',
          entities: [],
          localeIso2: 'en',
        },
      };
      const actual = manager.process(result, context);
      expect(actual).toBeTruthy();
      expect(result).toEqual({
        intent: 'intent',
        localeIso2: 'en',
        utterance: 'hello',
        answer: 'answer',
        srcAnswer: 'Enter entity2',
        score: 1,
        entities: [
          {
            entity: 'entity1',
            utteranceText: 'entity1-0',
            sourceText: 'entity1-0',
            accuracy: 0.95,
            start: 0,
            end: 4,
            len: 5,
          },
          {
            entity: 'entity1_1',
            utteranceText: 'hello',
            sourceText: 'hello',
            accuracy: 0.95,
            start: 0,
            end: 4,
            len: 5,
            isSlotFillingFallback: true,
          },
        ],
        slotFill: {
          answer: 'answer',
          currentSlot: 'entity2',
          entities: [
            {
              entity: 'entity1',
              utteranceText: 'entity1-0',
              sourceText: 'entity1-0',
              accuracy: 0.95,
              start: 0,
              end: 4,
              len: 5,
            },
            {
              entity: 'entity1_1',
              utteranceText: 'hello',
              sourceText: 'hello',
              accuracy: 0.95,
              start: 0,
              end: 4,
              len: 5,
              isSlotFillingFallback: true,
            },
          ],
          intent: 'intent',
          latestSlot: 'entity1_1',
          localeIso2: 'en',
          srcAnswer: 'srcAnswer',
        },
      });
    });
  });
});
