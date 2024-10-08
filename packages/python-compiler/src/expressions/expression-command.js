const Expression = require('./expression');

class ExpressionCommand extends Expression {
  transpile() {
    return `${this.args[0] ? this.args[0].transpile() : ''};`;
  }
}

module.exports = ExpressionCommand;
