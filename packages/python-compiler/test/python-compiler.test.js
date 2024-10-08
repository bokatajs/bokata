const PythonCompiler = require('../src/python-compiler');

function normalize(str) {
  return str
    .split('\n')
    .map((x) => x.trim())
    .join(' ')
    .trim();
}

const container = {
  get() {
    return undefined;
  },
};

describe('Python Compiler', () => {
  describe('Constructor', () => {
    test('It should create an instance', () => {
      const evaluator = new PythonCompiler(container);
      expect(evaluator).toBeDefined();
    });
  });

  describe('Execute', () => {
    test('It should exeucute a simple code', async () => {
      const script = 'if n > 3:\n  n += 1';
      const context = { n: 5 };
      const evaluator = new PythonCompiler(container);
      const compiled = evaluator.transpile(script);
      await evaluator.execute(compiled, context);
      expect(context.n).toEqual(6);
    });
  });

  describe('Compile', () => {
    test('It should remove first comment', () => {
      const pipeline = ['// compiler=python', 'n = 7'];
      const evaluator = new PythonCompiler(container);
      const compiled = evaluator.compile(pipeline);
      const expected = '(async () => { n = 7;  })();';
      expect(normalize(compiled)).toEqual(normalize(expected));
    });
  });
});
