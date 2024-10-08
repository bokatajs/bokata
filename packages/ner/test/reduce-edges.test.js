const reduceEdges = require('../src/reduce-edges');

describe('Reduce Edges', () => {
  describe('reduceEdges', () => {
    test('It should take the edge with best accuracy', () => {
      const edgeA = {
        accuracy: 0.8,
        start: 0,
        end: 10,
      };
      const edgeB = {
        accuracy: 0.9,
        start: 0,
        end: 10,
      };
      const actual = reduceEdges([edgeA, edgeB]);
      expect(actual).toEqual([edgeB]);
    });
    test('If one edge is discarded then should not take it into account', () => {
      const edgeA = {
        accuracy: 0.8,
        start: 0,
        end: 10,
      };
      const edgeB = {
        accuracy: 0.9,
        start: 0,
        end: 10,
        discarded: true,
      };
      const actual = reduceEdges([edgeA, edgeB]);
      expect(actual).toEqual([edgeA]);
    });
    test('It should take the edge with best accuracy even if the overlap is small', () => {
      const edgeA = {
        accuracy: 0.8,
        start: 0,
        end: 10,
      };
      const edgeB = {
        accuracy: 0.9,
        start: 10,
        end: 15,
      };
      const actual = reduceEdges([edgeA, edgeB]);
      expect(actual).toEqual([edgeB]);
    });
    test('It should take the edge with best accuracy even with different sorting', () => {
      const edgeA = {
        accuracy: 0.8,
        start: 0,
        end: 10,
      };
      const edgeB = {
        accuracy: 0.9,
        start: 0,
        end: 10,
      };
      const actual = reduceEdges([edgeB, edgeA]);
      expect(actual).toEqual([edgeB]);
    });
    test('It should keep both if no overlap', () => {
      const edgeA = {
        accuracy: 0.8,
        start: 0,
        end: 10,
      };
      const edgeB = {
        accuracy: 0.9,
        start: 11,
        end: 20,
      };
      const actual = reduceEdges([edgeA, edgeB]);
      expect(actual).toEqual([edgeA, edgeB]);
    });
    test('It should keep both if they have same priority', () => {
      const edgeA = {
        accuracy: 0.9,
        start: 0,
        end: 10,
        len: 11,
        entity: 'entity',
      };
      const edgeB = {
        accuracy: 0.9,
        start: 5,
        end: 16,
        len: 11,
        entity: 'entity',
      };
      const actual = reduceEdges([edgeA, edgeB]);
      expect(actual).toEqual([edgeA, edgeB]);
    });
    test('It should keep both if they have same priority if useMaxLength is false', () => {
      const edgeA = {
        accuracy: 0.9,
        start: 0,
        end: 10,
        len: 11,
        entity: 'entity',
      };
      const edgeB = {
        accuracy: 0.9,
        start: 5,
        end: 16,
        len: 11,
        entity: 'entity',
      };
      const actual = reduceEdges([edgeA, edgeB], false);
      expect(actual).toEqual([edgeA, edgeB]);
    });
    test('It should keep both if one is a number and useMaxLength is false', () => {
      const edgeA = {
        accuracy: 0.9,
        start: 0,
        end: 10,
        len: 11,
        entity: 'entity',
      };
      const edgeB = {
        accuracy: 0.9,
        start: 5,
        end: 16,
        len: 11,
        entity: 'number',
      };
      const actual = reduceEdges([edgeA, edgeB], false);
      expect(actual).toEqual([edgeA, edgeB]);
    });
    test('It should detect if is the same enum option entity to discard one', () => {
      const edgeA = {
        accuracy: 0.9,
        start: 0,
        end: 10,
        len: 11,
        type: 'enum',
        entity: 'entity',
        option: 'op1',
      };
      const edgeB = {
        accuracy: 0.9,
        start: 0,
        end: 10,
        len: 11,
        type: 'enum',
        entity: 'entity',
        option: 'op1',
      };
      const actual = reduceEdges([edgeA, edgeB], false);
      expect(actual).toEqual([edgeB]);
    });
    test('It should choose the largest one', () => {
      const edgeA = {
        accuracy: 0.9,
        start: 0,
        end: 10,
        len: 11,
        type: 'enum',
        entity: 'entity',
        option: 'op1',
      };
      const edgeB = {
        accuracy: 0.9,
        start: 0,
        end: 9,
        len: 10,
        type: 'enum',
        entity: 'entity',
        option: 'op1',
      };
      const actual = reduceEdges([edgeA, edgeB], false);
      expect(actual).toEqual([edgeA]);
    });
    test('If both are enums and one is substring of the other, discard the smaller', () => {
      const edgeA = {
        accuracy: 0.9,
        start: 0,
        end: 10,
        len: 11,
        type: 'enum',
        entity: 'entity1',
        option: 'op1',
        utteranceText: 'abcdefghijk',
      };
      const edgeB = {
        accuracy: 0.9,
        start: 0,
        end: 9,
        len: 10,
        type: 'enum',
        entity: 'entity2',
        option: 'op2',
        utteranceText: 'abcdefghij',
      };
      const actual = reduceEdges([edgeA, edgeB], false);
      expect(actual).toEqual([edgeA]);
    });
  });
  describe('splitEdges', () => {
    test('If a trim entity overlaps on end with a non-trim entity the trim entity is cutted', () => {
      const edgeA = {
        type: 'trim',
        subtype: 'afterLast',
        start: 20,
        end: 34,
        len: 15,
        accuracy: 0.99,
        sourceText: 'Madrid tomorrow',
        utteranceText: 'Madrid tomorrow',
        entity: 'entityA',
      };
      const edgeB = {
        start: 27,
        end: 34,
        len: 8,
        accuracy: 0.95,
        sourceText: 'tomorrow',
        utteranceText: 'tomorrow',
        entity: 'entityB',
      };
      const actual = reduceEdges([edgeA, edgeB], false);
      expect(actual[0]).toEqual({
        type: 'trim',
        subtype: 'afterLast',
        start: 20,
        end: 26,
        len: 6,
        accuracy: 0.99,
        sourceText: 'Madrid',
        utteranceText: 'Madrid',
        entity: 'entityA',
      });
      expect(actual[1]).toEqual(edgeB);
    });
    test('If a trim entity overlaps on start with a non-trim entity the trim entity is cutted', () => {
      const edgeA = {
        type: 'trim',
        subtype: 'afterLast',
        start: 20,
        end: 34,
        len: 15,
        accuracy: 0.99,
        sourceText: 'Madrid tomorrow',
        utteranceText: 'Madrid tomorrow',
        entity: 'entityA',
      };
      const edgeB = {
        start: 20,
        end: 26,
        len: 6,
        accuracy: 0.95,
        sourceText: 'Madrid',
        utteranceText: 'Madrid',
        entity: 'entityB',
      };
      const actual = reduceEdges([edgeA, edgeB], false);
      expect(actual[0]).toEqual({
        type: 'trim',
        subtype: 'afterLast',
        start: 27,
        end: 34,
        len: 8,
        accuracy: 0.99,
        sourceText: 'tomorrow',
        utteranceText: 'tomorrow',
        entity: 'entityA',
      });
      expect(actual[1]).toEqual(edgeB);
    });
    test('If a trim entity overlaps in middle with a non-trim entity the trim entity is not changed and other entity is removed', () => {
      const edgeA = {
        type: 'trim',
        subtype: 'afterLast',
        start: 20,
        end: 40,
        len: 21,
        accuracy: 0.99,
        sourceText: 'Madrid tomorrow hello',
        utteranceText: 'Madrid tomorrow hello',
        entity: 'entityA',
      };
      const edgeB = {
        start: 27,
        end: 34,
        len: 8,
        accuracy: 0.95,
        sourceText: 'tomorrow',
        utteranceText: 'tomorrow',
        entity: 'entityB',
      };
      const actual = reduceEdges([edgeA, edgeB], false);
      expect(actual).toEqual([edgeA]);
    });
  });
});
