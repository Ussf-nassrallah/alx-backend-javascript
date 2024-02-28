const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  describe('sum', () => {
    it('should equal 4 when (a is 2) and (b is 2)', () => {
      const expectedOutput = 4;
      const output = calculateNumber('SUM', 2, 2);

      assert.equal(output, expectedOutput);
    });

    it('should equal 4 when (a is 1) and (b is 3)', () => {
      const expectedOutput = 4;
      const output = calculateNumber('SUM', 1, 3);

      assert.equal(output, expectedOutput);
    });

    it('should equal 5 when (a is 1) and (b is 3.7)', () => {
      const expectedOutput = 5;
      const output = calculateNumber('SUM', 1, 3.7);

      assert.equal(output, expectedOutput);
    });

    it('should equal 5 when (a is 1.2) and (b is 3.7)', () => {
      const expectedOutput = 5;
      const output = calculateNumber('SUM', 1.2, 3.7);

      assert.equal(output, expectedOutput);
    });

    it('should equal 6 when (a is 1.5) and (b is 3)', () => {
      const expectedOutput = 6;
      const output = calculateNumber('SUM', 1.5, 3.7);

      assert.equal(output, expectedOutput);
    });

    it('should equal 6 when (a is 1.4) and (b is 4.5)', () => {
      const expectedOutput = 6;
      const output = calculateNumber('SUM', 1.4, 4.5);

      assert.equal(output, expectedOutput);
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

    it('divide 1 and 4', () => {
      assert.equal(calculateNumber('DIVIDE', 1, 4), 0.25);
    });

    it('divide 1 and 3.7', () => {
      assert.equal(calculateNumber('DIVIDE', 1, 3.7), 0.25);
    });

    it('divide 1.4 and 4.5', () => {
      assert.equal(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
    });

    it('divide 1.6 and 2.4', () => {
      assert.equal(calculateNumber('DIVIDE', 1.6, 2.4), 1);
    });

    it('divide 4.2 and 1.5', () => {
      assert.equal(calculateNumber('DIVIDE', 4.2, 1.5), 2);
    });

    it('divide -0.7 and 0.7', () => {
      assert.equal(calculateNumber('DIVIDE', -0.7, 0.7), -1);
    });

    it('divide -0.8 and -0.7', () => {
      assert.equal(calculateNumber('DIVIDE', -0.8, -0.7), 1);
    });

    it('divide -44.5 and 2.4', () => {
      assert.equal(calculateNumber('DIVIDE', -44.5, 2.4), -22);
    });

    it('divide -88.5 and -3.6', () => {
      assert.equal(calculateNumber('DIVIDE', -88.5, -3.6), 22);
    });
  });
});