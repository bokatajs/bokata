const Expression = require('./expression');

class DictionaryExpression extends Expression {
  transpile() {
    if (!this.args[0].length) {
      return '{ }';
    }
    let code = '{ ';
    for (let i = 0; i < this.args[0].length; i += 1) {
      if (i) {
        code = `${code}, `;
      }
      code = `${code}${this.args[0][i].key.transpile()}: ${this.args[0][i].value.transpile()}`;
    }
    if (this.args[0].length) {
      code = `${code} `;
    }
    return `${code} }`;
  }
}

module.exports = DictionaryExpression;
