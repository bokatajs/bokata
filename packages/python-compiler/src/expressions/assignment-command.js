const Expression = require('./expression');

class AssignmentCommand extends Expression {
  transpile(options = {}) {
    if (!options.names) {
      options.names = {};
    }
    let code = this.transpileVars(options.names);
    code = `${this.args[0].transpile()} ${this.args[2] || '='} ${this.args[1].transpile()};\n`;
    if (options.exports) {
      code = `${code}${this.transpileExports(options.names)}`;
    }
    return code;
  }
}

module.exports = AssignmentCommand;
