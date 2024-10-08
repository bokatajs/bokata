const Expression = require('./expression');

class BreakCommand extends Expression {
  transpile() {
    return 'break;';
  }
}

module.exports = BreakCommand;
