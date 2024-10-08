const { ProgressBar } = require('../src');

class StreamMock {
  constructor() {
    this.columns = 80;
    this.lines = [''];
    this.cursorLine = 0;
  }

  write(str) {
    const lines = str.split(/\r?\n/);
    this.lines[this.cursorLine] = `${this.lines[this.cursorLine]}${lines[0]}`;
    if (lines.length > 1) {
      for (let i = 1; i < lines.length; i += 1) {
        this.lines[this.cursorLine + i] = lines[i];
      }
      this.cursorLine = this.lines.length - 1;
    }
  }

  cursorTo(lineNumber) {
    this.cursorLine = lineNumber;
    this.clearLine(lineNumber);
  }

  clearLine(lineNumber) {
    this.lines[lineNumber] = '';
  }
}

describe('Progress Bar', () => {
  describe('constructor', () => {
    test('It should create a new instance', () => {
      const progress = new ProgressBar();
      expect(progress).toBeDefined();
    });
    test('An stream can be provided', () => {
      const stream = new StreamMock();
      const progress = new ProgressBar(undefined, { stream });
      expect(progress.stream).toBe(stream);
    });
    test('If a number is provided as option, is identified as the total', () => {
      const progress = new ProgressBar(undefined, 30);
      expect(progress.total).toEqual(30);
    });
    test('A format string can be provided', () => {
      const progress = new ProgressBar(':bar ETA: :eta');
      expect(progress.fmt).toEqual(':bar ETA: :eta');
    });
  });

  describe('tick', () => {
    test('It should write the progress', () => {
      const stream = new StreamMock();
      const progress = new ProgressBar(undefined, { stream, total: 10 });
      progress.tick(1);
      expect(stream.lines).toHaveLength(2);
      expect(stream.lines[0].slice(0, -2)).toEqual('▓░░░░░░░░░ 0.');
    });
    test('If tick is 0 should not crash', () => {
      const stream = new StreamMock();
      const progress = new ProgressBar(undefined, { stream, total: 10 });
      progress.tick(0);
      expect(stream.lines).toHaveLength(2);
      expect(stream.lines[0].slice(0, -2)).toEqual('░░░░░░░░░░ 0.');
    });
    test('It should add progress to already existing', () => {
      const stream = new StreamMock();
      const progress = new ProgressBar(undefined, { stream, total: 10 });
      progress.tick(1);
      progress.tick(2);
      expect(stream.lines).toHaveLength(2);
      expect(stream.lines[0].slice(0, -2)).toEqual('▓▓▓░░░░░░░ 0.');
    });
    test('If tick is 0, then do not add progress', () => {
      const stream = new StreamMock();
      const progress = new ProgressBar(undefined, { stream, total: 10 });
      progress.tick(3);
      progress.tick(0);
      expect(stream.lines).toHaveLength(2);
      expect(stream.lines[0].slice(0, -2)).toEqual('▓▓▓░░░░░░░ 0.');
    });
    test('If current progress is greater or equal than total, then is complete', () => {
      const stream = new StreamMock();
      const progress = new ProgressBar(undefined, { stream, total: 10 });
      progress.tick(1);
      expect(progress.complete).toBeFalsy();
      progress.tick(9);
      expect(stream.lines).toHaveLength(2);
      expect(stream.lines[0].slice(0, -2)).toEqual('▓▓▓▓▓▓▓▓▓▓ 0.');
      expect(progress.complete).toBeTruthy();
    });
  });
});
