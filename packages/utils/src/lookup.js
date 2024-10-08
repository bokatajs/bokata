class Lookup {
  constructor(data, propName = 'input') {
    this.dict = {};
    this.items = [];
    if (data) {
      this.buildFromData(data, propName);
    }
  }

  add(key) {
    if (this.dict[key] === undefined) {
      this.dict[key] = this.items.length;
      this.items.push(key);
    }
  }

  buildFromData(data, propName) {
    for (let i = 0; i < data.length; i += 1) {
      const item = data[i][propName];
      const keys = Object.keys(item);
      for (let j = 0; j < keys.length; j += 1) {
        this.add(keys[j]);
      }
    }
  }

  prepare(item) {
    const keys = Object.keys(item);
    const resultKeys = [];
    const resultData = {};
    for (let i = 0; i < keys.length; i += 1) {
      const key = keys[i];
      if (this.dict[key] !== undefined) {
        resultKeys.push(this.dict[key]);
        resultData[this.dict[key]] = item[key];
      }
    }
    return {
      keys: resultKeys,
      data: resultData,
    };
  }

  toVector(item) {
    const result = new Float32Array(this.items.length);
    Object.keys(item).forEach((word) => {
      const position = this.dict[word];
      if (position !== undefined) {
        result[position] = 1;
      }
    });
    return result;
  }

  toObj(item) {
    const result = {};
    Object.keys(item).forEach((word) => {
      const position = this.dict[word];
      if (position !== undefined) {
        result[position] = 1;
      }
    });
    return result;
  }

  vectorToObj(item) {
    const result = {};
    if (Array.isArray(item)) {
      for (let i = 0; i < item.length; i += 1) {
        result[this.items[i]] = item[i];
      }
    } else {
      Object.keys(item).forEach((key) => {
        result[this.items[key]] = item[key];
      });
    }
    return result;
  }
}

module.exports = Lookup;
