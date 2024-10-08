const { Bench } = require('../src');

function init() {
  return [7, 12, 0, -3, 4, 9, 11, 5, 3, 6, -2, 8];
}

function swap(arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function bubbleSort(arr) {
  for (let i = arr.length - 1; i >= 0; i -= 1) {
    for (let j = 1; j <= i; j += 1) {
      if (arr[j - 1] > arr[j]) {
        swap(arr, j - 1, j);
      }
    }
  }
  return arr;
}

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i += 1) {
    let minIdx = i;
    for (let j = i + 1; j < arr.length; j += 1) {
      if (arr[j] < arr[minIdx]) {
        minIdx = j;
      }
    }
    swap(i, minIdx);
  }
  return arr;
}

describe('Bench', () => {
  describe('Constructor', () => {
    test('It should create a new instance', () => {
      const bench = new Bench();
      expect(bench).toBeDefined();
      expect(bench.duration).toEqual(60000);
      expect(bench.transactionsPerRun).toEqual(1);
      expect(bench.algorithms).toEqual([]);
    });
    test('Settings can be provided', () => {
      const bench = new Bench({ duration: 33, transactionsPerRun: 12 });
      expect(bench.duration).toEqual(33);
      expect(bench.transactionsPerRun).toEqual(12);
    });
  });

  describe('Add', () => {
    test('It should add algorithms', () => {
      const bench = new Bench();
      bench.add('Bubble', bubbleSort, init);
      bench.add('Selection', selectionSort);
      expect(bench.algorithms).toHaveLength(2);
    });
  });

  describe('Measure', () => {
    test('It should measure one algorithm', async () => {
      const bench = new Bench({ duration: 50 });
      bench.add('Bubble', bubbleSort, init);
      const result = await bench.measure(bench.algorithms[0]);
      expect(result.name).toEqual('Bubble');
      expect(result.runs).toBeGreaterThan(1);
      expect(result.transactions).toEqual(result.runs);
      expect(result.elapsed).toBeGreaterThanOrEqual(50);
    });
  });

  describe('Run', () => {
    test('It should measure several algorithms', async () => {
      const bench = new Bench({ duration: 50 });
      bench.add('Bubble', bubbleSort, init);
      bench.add('Selection', selectionSort, init);
      const result = await bench.run();
      expect(result).toHaveLength(2);
      expect(result[0].runs).toBeGreaterThan(1);
      expect(result[0].transactions).toEqual(result[0].runs);
      expect(result[0].elapsed).toBeGreaterThanOrEqual(50);
      expect(result[1].runs).toBeGreaterThan(1);
      expect(result[1].transactions).toEqual(result[1].runs);
      expect(result[1].elapsed).toBeGreaterThanOrEqual(50);
    });
  });
});
