const { JavascriptCompiler } = require('@bokata/evaluator');
const PythonParser = require('./python-parser');
const { forEach, range, print, getIndex, len } = require('./helper');

class PythonCompiler extends JavascriptCompiler {
  constructor(container) {
    super(container);
    this.name = 'python';
  }

  transpile(text) {
    return new PythonParser(text).parseCommand().transpile();
  }

  compile(pipeline) {
    let code;
    if (Array.isArray(pipeline) && pipeline[0].startsWith('//')) {
      code = pipeline.slice(1).join('\n');
    } else {
      code = Array.isArray(pipeline) ? pipeline.join('\n') : pipeline;
    }
    const header = '(async () => {\n';
    const footer = '\n})();';
    const wrapped = header + this.transpile(code) + footer;
    return wrapped;
  }

  async evaluate(str, context) {
    const transpiled = this.transpile(str);
    if (!context.globalFuncs) {
      context.globalFuncs = { forEach, range, print, getIndex, len };
    }
    const result = await this.evaluateAll(transpiled, context);
    if (!result || result.length === 0) {
      return undefined;
    }
    return result[result.length - 1];
  }

  async execute(compiled, srcInput, srcObject) {
    const context = {
      this: srcObject,
      input: srcInput,
      globalFuncs: {
        forEach,
        range,
        print,
        getIndex,
        len,
      },
    };
    await super.evaluate(compiled, context);
  }
}

module.exports = PythonCompiler;
