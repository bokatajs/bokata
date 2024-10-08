const Expression = require('./expression');

class ImportCommand extends Expression {
  transpile(options = {}) {
    if (!options.names) {
      options.names = {};
    }
    let code = this.transpileVars(options.names);
    code = `${code}${this.args[0]} = importModule("${this.args[0]}");`;
    if (options.exports) {
      code = `${code}${this.transpileExports(options.names)}`;
    }
    return code;
  }

  collectNames(names) {
    this.addVarName(this.args[0], names);
  }
}

module.exports = ImportCommand;
