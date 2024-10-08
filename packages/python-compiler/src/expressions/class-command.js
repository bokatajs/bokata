const Expression = require('./expression');

class ClassCommand extends Expression {
  collectNames(names) {
    this.addDefName(this.args[0], [], names);
  }

  transpile(options = {}) {
    if (!options.names) {
      options.names = {};
    }
    const name = this.args[0];
    const body = this.args[1];
    if (!options.exports) {
      this.addDefName(name, [], options.names);
    }
    let code = `function ${name} (...args) {\n`;
    const newoptions = { names: {} };
    code += body.transpile(newoptions);
    if (body.collectNames) {
      body.collectNames(newoptions.names);
    }
    code += this.transpileSelfDefs(newoptions.names);
    if (!newoptions.names || !newoptions.names.defs || !newoptions.names.defs.includes('__init__')) {
      code += ' function __init__() { }\n';
    }
    if (newoptions.names && newoptions.names.defs) {
      for (let i = 0; i < newoptions.names.defs.length; i += 1) {
        const funcname = newoptions.names.defs[i];
        code += `${name}.prototype.${funcname} = function (...args) { return ${funcname}(this, ...args); }\n`;
      }
    }
    code += '  this.__init__(...args);\n';
    code += '\n}\n';
    if (options.exports) {
      code += this.transpileExports(name, options.names);
    }
    return code;
  }

  transpileSelfDefs(className, names) {
    let code = '';
    if (!names || !names.defs || !names.defargs) {
      return code;
    }
    for (let i = 0; i < names.defs.length; i += 1) {
      const defname = names.defs[i];
      if (!(!names.defargs[defname] || names.defargs[defname][0] !== 'self')) {
        if (code !== '') {
          code += ' ';
        }
        code += `${className}.prototype.${defname} = function (`;
        let arglist = '';
        for (let j = 1; j < names.defargs[defname].length; j += 1) {
          if (arglist !== '') {
            arglist += ', ';
          }
          arglist += names.defargs[defname][j];
        }
        code += `${arglist}) { return ${defname}(this)`;
        if (arglist !== '') {
          code += `, ${arglist}`;
        }
        code += '); };';
      }
    }
    return code;
  }
}

module.exports = ClassCommand;
