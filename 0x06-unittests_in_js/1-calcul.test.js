const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  describe('sum', () => {
    it('round of a', () => {
      assert.equal(calculateNumber('SUM', 15.78, 2), 18);
      assert.equal(calculateNumber('SUM', 1.2, 0), 1);
      assert.equal(calculateNumber('SUM', 3.5, 2), 6);
    });

    it('round of b', () => {
      assert.equal(calculateNumber('SUM', 2, 15.78), 18);
      assert.equal(calculateNumber('SUM', 0, 1.2), 1);
      assert.equal(calculateNumber('SUM', 2, 3.5), 6);
    });

    it('sum of a and b', () => {
      assert.equal(calculateNumber('SUM', 15.78, 2.5), 19);
      assert.equal(calculateNumber('SUM', 1.2, 0.2), 1);
      assert.equal(calculateNumber('SUM', 3.5, 2.7), 7);
    });
  });

  describe('subtract', () => {
    it('should equal 6 when (a is 10) and (b is 4)', () => {
      const expectedOutput = 6;
      const output = calculateNumber('SUBTRACT', 10, 4);

      assert.equal(output, expectedOutput);
    });

    it('should equal -4 when (a is 1.4) and (b is 4.5)', () => {
      const expectedOutput = -4;
      const output = calculateNumber('SUBTRACT', 1.4, 4.5);

      assert.equal(output, expectedOutput);
    });
  });

  describe('divide', () => {
    it('should equal 0.2 when (a is 1.4) and (b is 4.5)', () => {
      const expectedOutput = 0.2;
      const output = calculateNumber('DIVIDE', 1.4, 4.5);

      assert.equal(output, expectedOutput);
    });

    it('should display an Erorr when (a is 1.4) and (b is 0)', () => {
      const expectedOutput = 'Error';
      const output = calculateNumber('DIVIDE', 1.4, 0);

      assert.equal(output, expectedOutput);
    });
  });
});