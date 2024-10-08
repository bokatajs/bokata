const Expression = require('./expression');

class IfCommand extends Expression {
  transpile(options = {}) {
    let code = this.transpileVars(this, options.names);
    const cond = this.args[0];
    const thencmd = this.args[1];
    const elsecmd = this.args[2];
    code = `${code}if (${cond.transpile(options)}) { ${thencmd.transpile(options)} }`;
    if (elsecmd) {
      code = `${code} else { ${elsecmd.transpile(options)} }`;
    }
    return code;
  }
}

module.exports = IfCommand;
