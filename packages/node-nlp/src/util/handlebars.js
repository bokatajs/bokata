const { compile } = require('@bokata/evaluator');

class Handlebars {
  static compile(str) {
    return compile(str);
  }
}

module.exports = {
  Handlebars,
};
