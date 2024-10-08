const Expression = require('./expression');

class NewExpression extends Expression {
  transpile() {
    return `new ${this.args[0].transpile()}`;
  }
}

module.exports = NewExpression;
