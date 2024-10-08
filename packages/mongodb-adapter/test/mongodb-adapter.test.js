const { MongodbAdapter } = require('../src');
const MongoClientMock = require('./mongodb-mock');

describe('MemoryDB Adapter', () => {
  describe('Constructor', () => {
    test('Should create an instance', () => {
      const adapter = new MongodbAdapter();
      expect(adapter).toBeDefined();
    });
  });

  describe('Insert one', () => {
    test('It should provides an id for the item', async () => {
      const adapter = new MongodbAdapter();
      adapter.mongoClient = new MongoClientMock();
      await adapter.connect();
      const input = { name: 'user 1' };
      const expected = await adapter.insertOne('user', input);
      expect(expected.id).toBeDefined();
      const actual = await adapter.findById('user', expected.id);
      expect(actual.name).toEqual(expected.name);
      adapter.disconnect();
    });
  });

  describe('Insert many', () => {
    test('It should return all items with ids', async () => {
      const adapter = new MongodbAdapter();
      adapter.mongoClient = new MongoClientMock();
      await adapter.connect();
      const input = [{ name: 'user 1' }, { name: 'user 2' }];
      const actual = await adapter.insertMany('user', input);
      expect(actual.length).toEqual(2);
      expect(actual[0].name).toEqual(input[0].name);
      expect(actual[1].name).toEqual(input[1].name);
    });
  });

  describe('Save', () => {
    test('If the item does not haves id, then insert new', async () => {
      const adapter = new MongodbAdapter();
      adapter.mongoClient = new MongoClientMock();
      await adapter.connect();
      const input = { name: 'user 1' };
      const actual = await adapter.save('user', input);
      expect(actual.id).toBeDefined();
    });
    test('If the item has id but is not in collection, then insert new', async () => {
      const adapter = new MongodbAdapter();
      adapter.mongoClient = new MongoClientMock();
      await adapter.connect();
      const input = { id: 'patata', name: 'user 1' };
      const actual = await adapter.save('user', input);
      expect(actual.id).toBeDefined();
    });
    test('If the item has id and alreay exists, then replace', async () => {
      const adapter = new MongodbAdapter();
      adapter.mongoClient = new MongoClientMock();
      await adapter.connect();
      const input = { name: 'user 1' };
      const item = await adapter.save('user', input);
      item.age = 30;
      const actual = await adapter.save('user', item);
      expect(actual.id).toEqual(item.id);
      expect(actual.name).toEqual(item.name);
      expect(actual.age).toEqual(item.age);
    });
  });

  describe('Find One', () => {
    test('It returns only the first element', async () => {
      const adapter = new MongodbAdapter();
      adapter.mongoClient = new MongoClientMock();
      await adapter.connect();
      const items = [];
      for (let i = 0; i < 1000; i += 1) {
        const item = { num: i, mod: i % 10 };
        items.push(item);
      }
      await adapter.insertMany('items', items);
      const actual = await adapter.findOne('items');
      expect(actual.num).toEqual(0);
    });
  });

  describe('Find', () => {
    test('It returns only the first element', async () => {
      const adapter = new MongodbAdapter();
      adapter.mongoClient = new MongoClientMock();
      await adapter.connect();
      const items = [];
      for (let i = 0; i < 1000; i += 1) {
        const item = { num: i, mod: i % 10 };
        items.push(item);
      }
      await adapter.insertMany('items', items);
      const actual = await adapter.find('items');
      expect(actual).toHaveLength(1000);
    });
  });
});
