const Expression = require('./expression');

class BinaryExpression extends Expression {
  transpile() {
    return `${this.args[1].transpile()} ${this.args[0]} ${this.args[2].transpile()}`;
  }
}

module.exports = BinaryExpression;
