const Expression = require('./expression');

class GroupExpression extends Expression {
  transpile() {
    return `(${this.args[0].transpile()})`;
  }
}

module.exports = GroupExpression;
