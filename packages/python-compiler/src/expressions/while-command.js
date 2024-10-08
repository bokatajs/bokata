const Expression = require('./expression');

class WhileCommand extends Expression {
  transpile(options = {}) {
    let code = this.transpileVars(options.names);
    code = `${code}while (${this.args[0].transpile()}) { ${this.args[1].transpile()} }`;
    return code;
  }
}

module.exports = WhileCommand;
