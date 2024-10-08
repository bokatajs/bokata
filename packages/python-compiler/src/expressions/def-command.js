const Expression = require('./expression');

class DefCommand extends Expression {
  transpile(options = {}) {
    const name = this.args[0];
    const args = this.args[1];
    const body = this.args[2];
    let code = `function ${name}(`;
    if (options.exports) {
      if (!options.names) {
        options.names = {};
      }
      this.addDefName(name, args, options.names);
    }
    for (let i = 0; i < args.length; i += 1) {
      if (i) {
        code = `${code}, `;
      }
      code = `${code}${args[i]}`;
    }
    code = `${code}) { ${body.transpile({
      names: { vars: [], defs: [], args: args.slice() },
    })} }`;
    if (options.exports) {
      code = `${code}${this.transpileExports(options.names)}`;
    }
    return code;
  }

  collectNames(names) {
    this.addDefName(this.args[0], this.args[1], names);
  }
}

module.exports = DefCommand;
