const ConstantExpression = require('./constant-expression');

class VariableExpression extends ConstantExpression {
  getName() {
    return this.args[0];
  }
}

module.exports = VariableExpression;
