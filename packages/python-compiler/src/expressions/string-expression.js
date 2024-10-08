const Expression = require('./expression');

class StringExpression extends Expression {
  constructor(value) {
    super(value);
    this.quote = "'";
    if (value && value.indexOf(this.quote) >= 0) {
      this.quote = '"';
    }
  }

  transpile() {
    return `${this.quote}${this.args[0]}${this.quote}`;
  }
}

module.exports = StringExpression;
