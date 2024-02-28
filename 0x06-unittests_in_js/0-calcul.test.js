const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  describe('sum', () => {
    it('should strictEqual 4 when (a is 2) and (b is 2)', () => {
      const expectedOutput = 4;
      const output = calculateNumber(2, 2);

      assert.strictEqual(output, expectedOutput);
    });

    it('should strictEqual 4 when (a is 1) and (b is 3)', () => {
      const expectedOutput = 4;
      const output = calculateNumber(1, 3);

      assert.strictEqual(output, expectedOutput);
    });

    it('should strictEqual 5 when (a is 1) and (b is 3.7)', () => {
      const expectedOutput = 5;
      const output = calculateNumber(1, 3.7);

      assert.strictEqual(output, expectedOutput);
    });

    it('should strictEqual 5 when (a is 1.2) and (b is 3.7)', () => {
      const expectedOutput = 5;
      const output = calculateNumber(1.2, 3.7);

      assert.strictEqual(output, expectedOutput);
    });

    it('should strictEqual 6 when (a is 1.5) and (b is 3)', () => {
      const expectedOutput = 6;
      const output = calculateNumber(1.5, 3.7);

      assert.strictEqual(output, expectedOutput);
    });
  });
});