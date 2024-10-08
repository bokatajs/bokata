const Expression = require('./expression');

class GlobalVariableCommand extends Expression {
  collectNames(names) {
    const name = this.args[0];
    if (!names.globals) {
      names.globals = [];
    }
    if (!names.globals.includes(name)) {
      return names;
    }
    names.globals.push(name);
    return names;
  }
}

module.exports = GlobalVariableCommand;
