class Expression {
  constructor(...args) {
    this.args = args;
  }

  transpile() {
    return '';
  }

  transpileVars(names = {}) {
    if (!this.collectNames) {
      return '';
    }
    if (!names.vars) {
      names.vars = [];
    }
    if (!names.defs) {
      names.defs = [];
    }
    if (!names.args) {
      names.args = [];
    }
    this.collectNames(names);
    let code = '';
    for (let i = 0; i < names.vars.length; i += 1) {
      const name = names.vars[i];
      code = `${code}var ${name};\n`;
    }
    return code;
  }

  alreadyDefined(name, names) {
    if (names.globals && names.globals.includes(name)) {
      return true;
    }
    if (names.args && names.args.includes(name)) {
      return true;
    }
    if (names.defs && names.defs.includes(name)) {
      return true;
    }
    if (names.vars && names.vars.includes(name)) {
      return true;
    }
    return false;
  }

  addVarName(name, names) {
    if (this.alreadyDefined(name, names)) {
      return;
    }
    if (!names.vars) {
      names.vars = [];
    }
    names.vars.push(name);
  }

  addDefName(name, args, names) {
    if (this.alreadyDefined(name, names)) {
      return;
    }
    if (!names.defs) {
      names.defs = [];
    }
    if (!names.defargs) {
      names.defargs = {};
    }
    names.defs.push(name);
    names.defargs[name] = args;
  }

  transpileExports(names) {
    let code = ' return { ';
    if (names.vars) {
      for (let i = 0; i < names.vars.length; i += 1) {
        if (i) {
          code = `${code}, `;
        }
        code = `${code}${names.vars[i]}: ${names.vars[i]}`;
      }
    }
    if (names.defs) {
      for (let i = 0; i < names.defs.length; i += 1) {
        if (i) {
          code = `${code}, `;
        }
        code = `${code}${names.defs[i]}: ${names.defs[i]}`;
      }
    }
    code = `${code} };`;
    return code;
  }

  collectNames(names) {
    for (let i = 0; i < this.args.length; i += 1) {
      if (this.args[i] && this.args[i].collectNames) {
        this.args[i].collectNames(names);
      }
    }
  }
}

module.exports = Expression;
