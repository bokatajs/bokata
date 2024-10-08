const Expression = require('./expression');

class RaiseCommand extends Expression {
  transpile(options) {
    return `throw ${this.args[0].transpile(options)};`;
  }
}

module.exports = RaiseCommand;
