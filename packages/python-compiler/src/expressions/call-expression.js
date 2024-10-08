const Expression = require('./expression');

class CallExpression extends Expression {
  transpile() {
    let code = `${this.args[0].transpile()}(`;
    for (let i = 0; i < this.args[1].length; i += 1) {
      if (i) {
        code = `${code},`;
      }
      code = `${code}${this.args[1][i].transpile()}`;
    }
    return `${code})`;
  }
}

module.exports = CallExpression;
