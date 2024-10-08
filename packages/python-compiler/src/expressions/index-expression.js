const Expression = require('./expression');

class IndexExpression extends Expression {
  transpile() {
    return `${this.args[0].transpile()}[${this.args[0].transpile()}]`;
  }
}

module.exports = IndexExpression;
