const Expression = require('./expression');

class MinusExpression extends Expression {
  transpile() {
    return `- ${this.args[0].transpile()}`;
  }
}

module.exports = MinusExpression;
