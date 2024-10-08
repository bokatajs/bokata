const { Downloader } = require('../src');

describe('Downloader', () => {
  describe('constructor', () => {
    test('It should create a new instance', () => {
      const downloader = new Downloader();
      expect(downloader).toBeDefined();
      expect(downloader.replicateAllFolders).toEqual(false);
      expect(downloader.replaceIfExists).toEqual(true);
      expect(downloader.showProgress).toEqual(true);
      expect(downloader.automaticUntar).toEqual(true);
    });
    test('A proxy can be provided', () => {
      const proxy = '192.168.1.1:3128';
      const downloader = new Downloader({ proxy });
      expect(downloader.proxy).toEqual(proxy);
      expect(downloader.agent).toBeDefined();
    });
    test('Parameters can be provided', () => {
      const downloader = new Downloader({
        replicateAllFolders: true,
        replaceIfExists: false,
        showProgress: false,
        automaticUntar: false,
      });
      expect(downloader).toBeDefined();
      expect(downloader.replicateAllFolders).toEqual(true);
      expect(downloader.replaceIfExists).toEqual(false);
      expect(downloader.showProgress).toEqual(false);
      expect(downloader.automaticUntar).toEqual(false);
    });
  });
});
