const Expression = require('./expression');

class ListExpression extends Expression {
  transpile() {
    let code = '[';
    for (let i = 0; i < this.args[0].length; i += 1) {
      if (i) {
        code = `${code}, `;
      }
      code = `${code}${this.args[0][i].transpile()}`;
    }
    return `${code}]`;
  }
}

module.exports = ListExpression;
