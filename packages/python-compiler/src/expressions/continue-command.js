const Expression = require('./expression');

class ContinueCommand extends Expression {
  transpile() {
    return 'continue';
  }
}

module.exports = ContinueCommand;
