const Expression = require('./expression');

class ReturnCommand extends Expression {
  transpile() {
    return `return ${this.args[0].transpile()};`;
  }
}

module.exports = ReturnCommand;
