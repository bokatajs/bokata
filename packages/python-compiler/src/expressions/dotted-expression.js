const Expression = require('./expression');

class DottedExpression extends Expression {
  transpile() {
    return `${this.args[0].transpile()}.${this.args[1].transpile()}`;
  }
}

module.exports = DottedExpression;
