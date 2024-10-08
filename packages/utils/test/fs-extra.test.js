const { getAbsolutePath } = require('../src/fs-extra');

describe('FS extra', () => {
  describe('getAbsolutePath', () => {
    test('It should calculate absolute path', () => {
      const actual = getAbsolutePath('test');
      expect(actual.startsWith(process.cwd())).toBeTruthy();
      expect(actual.endsWith('test')).toBeTruthy();
    });
    test('if its already absolute, return it', () => {
      const actual = getAbsolutePath('/test');
      expect(actual).toEqual('/test');
    });
    test('if not path is added, then return root', () => {
      const actual = getAbsolutePath();
      expect(actual.startsWith(process.cwd())).toBeTruthy();
    });
  });
});
