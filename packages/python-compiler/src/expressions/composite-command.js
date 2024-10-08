const Expression = require('./expression');

class CompositeCommand extends Expression {
  collectNames(names) {
    for (let i = 0; i < this.args[0].length; i += 1) {
      if (this.args[0][i].collectNames) {
        this.args[0][i].collectNames(names);
      }
    }
  }

  transpile(options = {}) {
    if (!options.names) {
      options.names = {};
    }
    let code = '';
    for (let i = 0; i < this.args[0].length; i += 1) {
      if (i && code !== '') {
        code += ' ';
      }
      code += this.args[0][i].transpile();
    }
    if (options.exports) {
      code += this.transpileExports(options.names);
    }
    return code;
  }
}

module.exports = CompositeCommand;
