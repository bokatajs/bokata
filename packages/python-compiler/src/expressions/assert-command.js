const Expression = require('./expression');

class AssertCommand extends Expression {
  transpile(options) {
    return `if (__debug__ && !(${this.args[0].transpile(options)})) { throw new Error('Assert Error'); }`;
  }
}

module.exports = AssertCommand;
