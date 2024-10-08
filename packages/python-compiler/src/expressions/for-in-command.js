const Expression = require('./expression');

class ForInCommand extends Expression {
  transpile() {
    return `${this.transpileVars()}forEach(${this.args[1].transpile()}, function($item) {\n${
      this.args[0]
    }=$item;\n${this.args[2].transpile()}});\n`;
  }

  collectNames(names) {
    this.addVarName(this.args[0], names);
    if (this.args[2].collectNames) {
      this.args[2].collectNames(names);
    }
  }
}

module.exports = ForInCommand;
