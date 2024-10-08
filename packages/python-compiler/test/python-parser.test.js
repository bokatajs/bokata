const PythonParser = require('../src/python-parser');

function normalize(str) {
  return str
    .split('\n')
    .map((x) => x.trim())
    .join(' ')
    .trim();
}

describe('Python Parser', () => {
  describe('Constructor', () => {
    test('Constructor', () => {
      const parser = new PythonParser('');
      expect(parser).toBeDefined();
    });
  });

  describe('Transpile', () => {
    test('transpile', () => {
      const script = `
      __debug__ = true
      separator = ''
      for x in range(0, 10): # this is a comment # and this another
        separator += '-'
      print(separator)
      n = 1
      total = 1
      print(total)
      `;
      const transpiled = PythonParser.transpile(script);
      const expected = `__debug__ = true;
      separator = '';
      var x;
     forEach(range(0,10), function($item) {
     x=$item;
     separator += '-';
     });
      print(separator); n = 1;
      total = 1;
      print(total);`;
      expect(normalize(transpiled)).toEqual(normalize(expected));
    });
    test('Assert', () => {
      const script = 'assert a == 1';
      const transpiled = PythonParser.transpile(script);
      const expected = "if (__debug__ && !(a == 1)) { throw new Error('Assert Error'); }";
      expect(transpiled).toEqual(expected);
    });
    test('break', () => {
      const script = 'while (true):\n  break';
      const transpiled = PythonParser.transpile(script);
      const expected = 'while ((true)) { break; }';
      expect(transpiled).toEqual(expected);
    });
    test('class', () => {
      const script =
        'class Foo:\n  def __init__(self, name):\n    self.name=name\n  def get_name(self):\n     return self.name';
      const transpiled = PythonParser.transpile(script);
      const expected = `function Foo (...args) {
        function __init__(self, name) { self.name = name;
         } function get_name(self) { return self.name; }Foo.prototype.__init__ = function (...args) { return __init__(this, ...args); }
        Foo.prototype.get_name = function (...args) { return get_name(this, ...args); }
          this.__init__(...args);
        
        }`;
      expect(normalize(transpiled)).toEqual(normalize(expected));
    });
    test('continue', () => {
      const script = 'for i in range(0,10):\n  continue';
      const transpiled = PythonParser.transpile(script);
      const expected = `var i;
      forEach(range(0,10), function($item) {
      i=$item;
      continue});`;
      expect(normalize(transpiled)).toEqual(normalize(expected));
    });
    test('pass', () => {
      const script = 'class Foo:\n  pass';
      const transpiled = PythonParser.transpile(script);
      const expected = `function Foo (...args) {
        function __init__() { }
         this.__init__(...args);
       
       }`;
      expect(normalize(transpiled)).toEqual(normalize(expected));
    });
    test('dictionary', () => {
      const script = '{ a: 1, b: "two" }';
      const transpiled = PythonParser.transpile(script);
      const expected = "{ a: 1, b: 'two'  };";
      expect(transpiled).toEqual(expected);
    });
    test('if without else', () => {
      const script = 'if true:\n  pass';
      const expected = 'if (true) {  }';
      const transpiled = PythonParser.transpile(script);
      expect(transpiled).toEqual(expected);
    });
    test('if with else', () => {
      const script = 'if true:\n  pass\nelse:\n  pass';
      const expected = 'if (true) {  } else {  }';
      const transpiled = PythonParser.transpile(script);
      expect(transpiled).toEqual(expected);
    });
    test('raise', () => {
      const script = 'raise "error"';
      const transpiled = PythonParser.transpile(script);
      const expected = "throw 'error';";
      expect(transpiled).toEqual(expected);
    });
  });
});
