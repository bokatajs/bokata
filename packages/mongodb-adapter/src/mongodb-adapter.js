const mongodb = require('mongodb');
const { Clonable } = require('@bokata/core');

const { MongoClient, ObjectId } = mongodb;
const idField = '_id';

class MongodbAdapter extends Clonable {
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
      this.settings.tag = 'mongodb-adapter';
    }
    if (!this.settings.url) {
      this.settings.url = process.env.MONGO_URL;
    }
    if (!this.settings.dbName && this.settings.url) {
      this.settings.dbName = this.settings.url.slice(this.settings.url.lastIndexOf('/') + 1);
    }
    this.mongoClient = new MongoClient(this.settings.url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    this.registerDefault();
    this.driver = mongodb;
  }

  registerDefault() {
    const database = this.container ? this.container.get('database') : undefined;
    if (database) {
      database.registerAdapter('mongodb', this);
      database.defaultAdapter = 'mongodb';
    }
  }

  connect() {
    return new Promise((resolve, reject) => {
      this.mongoClient.connect((err, client) => {
        if (err) {
          return reject(err);
        }
        this.client = client;
        this.db = this.client.db(this.dbName);
        return resolve();
      });
    });
  }

  disconnect() {
    if (this.client) {
      this.client.close();
    }
  }

  convertOut(srcInput) {
    if (Array.isArray(srcInput)) {
      const result = [];
      for (let i = 0; i < srcInput.length; i += 1) {
        result.push(this.convertOut(srcInput[i]));
      }
      return result;
    }
    const input = { ...srcInput };
    if (input[idField]) {
      input.id = input[idField].toString();
      delete input[idField];
    }
    return input;
  }

  convertIn(srcInput) {
    if (Array.isArray(srcInput)) {
      const result = [];
      for (let i = 0; i < srcInput.length; i += 1) {
        result.push(this.convertOut(srcInput[i]));
      }
      return result;
    }
    const input = { ...srcInput };
    if (input.id) {
      input[idField] = input.id;
      delete input.id;
    }
    return input;
  }

  executeInCollection(name, fn) {
    return new Promise((resolve, reject) => {
      if (!this.db) {
        // eslint-disable-next-line no-promise-executor-return
        return reject(new Error('It seems that mongodb is not initialized, try invoking connect()'));
      }
      const collection = this.db.collection(name);
      // eslint-disable-next-line no-promise-executor-return
      return fn(collection, (err, result) => {
        if (err) {
          return reject(err);
        }
        return resolve(result);
      });
    });
  }

  createId(key) {
    return new ObjectId(key);
  }

  async find(name, condition, limit, offset, sort) {
    return this.executeInCollection(name, (collection, cb) => {
      const options = {};
      if (limit) {
        options.limit = limit;
      }
      if (offset) {
        options.skip = offset;
      }
      if (sort) {
        options.sort = sort;
      }
      collection.find(condition || {}, options).toArray((err, result) => {
        if (err) {
          return cb(err);
        }
        return cb(undefined, this.convertOut(result));
      });
    });
  }

  async findOne(name, condition = {}) {
    return this.executeInCollection(name, (collection, cb) => {
      collection.findOne(condition, (err, result) => {
        if (err) {
          return cb(err);
        }
        return cb(undefined, this.convertOut(result));
      });
    });
  }

  async findById(name, id) {
    let oId;
    try {
      oId = new ObjectId(id);
    } catch (err) {
      return null;
    }
    const result = await this.findOne(name, { [idField]: oId });
    return this.convertOut(result);
  }

  async insertOne(name, srcItem) {
    return this.executeInCollection(name, (collection, cb) => {
      const item = this.convertIn(srcItem);
      collection.insertOne(item, (err, result) => {
        if (err) {
          return cb(err);
        }
        return cb(undefined, this.convertOut(result.ops[0]));
      });
    });
  }

  async insertMany(name, srcItems) {
    return this.executeInCollection(name, (collection, cb) => {
      const items = this.convertIn(srcItems);
      collection.insertMany(items, (err, result) => {
        if (err) {
          return cb(err);
        }
        return cb(undefined, this.convertOut(result));
      });
    });
  }

  async save(name, srcItem) {
    const item = this.convertIn(srcItem);
    if (!item[idField]) {
      return this.insertOne(name, item);
    }
    const oldItem = await this.findById(name, item[idField]);
    if (oldItem) {
      return this.update(name, item);
    }
    return this.insertOne(name, item);
  }

  async update(name, srcItem) {
    const item = this.convertIn(srcItem);
    const query = { [idField]: new ObjectId(item[idField]) };
    const cloned = { ...item };
    delete cloned[idField];
    delete cloned.id;
    const newValues = { $set: cloned };
    return this.executeInCollection(name, (collection, cb) => {
      collection.updateOne(query, newValues, (err, result) => {
        if (err) {
          return cb(err);
        }
        return cb(undefined, this.convertOut(result));
      });
    });
  }

  async remove(name, condition = {}, justOne = false) {
    return this.executeInCollection(name, (collection, cb) => {
      if (justOne) {
        collection.deleteOne(condition, (err, result) => {
          if (err) {
            return cb(err);
          }
          return cb(undefined, result);
        });
      } else {
        collection.deleteMany(condition, (err, result) => {
          if (err) {
            return cb(err);
          }
          return cb(undefined, result);
        });
      }
    });
  }

  async removeById(name, id) {
    let oId;
    try {
      oId = new ObjectId(id);
    } catch (err) {
      return null;
    }
    return this.remove(name, { [idField]: oId }, true);
  }
}

module.exports = MongodbAdapter;
