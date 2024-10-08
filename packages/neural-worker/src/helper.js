class LookupTable {
  constructor(data, prop) {
    this.length = 0;
    this.prop = prop;
    this.table = {};
    this.build(data);
  }

  buildDatum(datum) {
    Object.keys(datum[this.prop]).forEach((key) => {
      if (this.table[key] === undefined) {
        this.table[key] = this.length;
        this.length += 1;
      }
    });
  }

  build(data) {
    data.forEach((datum) => this.buildDatum(datum));
  }
}

const toArray = (values) => Object.keys(values).map((key) => values[key]);

function toHash(hash) {
  const currentLookup = {};
  let index = 0;
  const keys = Object.keys(hash);
  for (let i = 0; i < keys.length; i += 1) {
    currentLookup[keys[i]] = index;
    index += 1;
  }
  return currentLookup;
}

function lookupToArray(currentLookup, object) {
  const result = {};
  const keys = Object.keys(currentLookup);
  for (let i = 0; i < keys.length; i += 1) {
    const key = keys[i];
    if (object[key]) {
      result[currentLookup[key]] = object[key];
    }
  }
  return result;
}

function lookupToObject(currentLookup, array) {
  const result = {};
  const keys = Object.keys(currentLookup);
  for (let i = 0; i < keys.length; i += 1) {
    result[keys[i]] = array[currentLookup[keys[i]]];
  }
  return result;
}

function getTypedArrayFn(table) {
  const { length } = Object.keys(table);
  return (v) => {
    const result = new Float32Array(length);
    Object.keys(v).forEach((word) => {
      const index = table[word];
      if (index !== undefined) {
        result[index] = v[word] || 0;
      }
    });
    return result;
  };
}

module.exports = {
  LookupTable,
  toArray,
  toHash,
  lookupToArray,
  lookupToObject,
  getTypedArrayFn,
};
