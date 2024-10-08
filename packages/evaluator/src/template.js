const compile = require('./compile');

class Template {
  compile(str, context) {
    return compile(str)(context);
  }
}

module.exports = Template;
