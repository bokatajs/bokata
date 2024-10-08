const Expression = require('./expression');

class ConstantExpression extends Expression {
  transpile() {
    return this.args[0];
  }
}

module.exports = ConstantExpression;
