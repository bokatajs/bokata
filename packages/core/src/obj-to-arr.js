const { defaultContainer } = require('./container');

class ObjToArr {
  constructor(container = defaultContainer) {
    this.container = container.container || container;
    this.name = 'objToArr';
  }

  static objToArr(obj) {
    return Object.keys(obj);
  }

  run(input) {
    if (!input.tokens) {
      return ObjToArr.objToArr(input);
    }
    input.tokens = ObjToArr.objToArr(input.tokens);
    return input;
  }
}

module.exports = ObjToArr;
