const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', () => {
  describe('sum', () => {
    it('should equal 4 when (a is 2) and (b is 2)', () => {
      const expectedOutput = 4;
      const output = calculateNumber('SUM', 2, 2);

      expect(output).to.eq(expectedOutput);
    });

    it('should equal 4 when (a is 1) and (b is 3)', () => {
      const expectedOutput = 4;
      const output = calculateNumber('SUM', 1, 3);

      expect(output).to.eq(expectedOutput);
    });

    it('should equal 5 when (a is 1) and (b is 3.7)', () => {
      const expectedOutput = 5;
      const output = calculateNumber('SUM', 1, 3.7);

      expect(output).to.eq(expectedOutput);
    });

    it('should equal 5 when (a is 1.2) and (b is 3.7)', () => {
      const expectedOutput = 5;
      const output = calculateNumber('SUM', 1.2, 3.7);

      expect(output).to.eq(expectedOutput);
    });

    it('should equal 6 when (a is 1.5) and (b is 3)', () => {
      const expectedOutput = 6;
      const output = calculateNumber('SUM', 1.5, 3.7);

      expect(output).to.eq(expectedOutput);
    });

    it('should equal 6 when (a is 1.4) and (b is 4.5)', () => {
      const expectedOutput = 6;
      const output = calculateNumber('SUM', 1.4, 4.5);

      expect(output).to.eq(expectedOutput);
    });
  });

  describe('subtract', () => {
    it('should equal 6 when (a is 10) and (b is 4)', () => {
      const expectedOutput = 6;
      const output = calculateNumber('SUBTRACT', 10, 4);

      expect(output).to.eq(expectedOutput);
    });

    it('should equal -4 when (a is 1.4) and (b is 4.5)', () => {
      const expectedOutput = -4;
      const output = calculateNumber('SUBTRACT', 1.4, 4.5);

      expect(output).to.eq(expectedOutput);
    });
  });

  describe('divide', () => {
    it('should equal 0.2 when (a is 1.4) and (b is 4.5)', () => {
      const expectedOutput = 0.2;
      const output = calculateNumber('DIVIDE', 1.4, 4.5);

      expect(output).to.eq(expectedOutput);
    });

    it('should display an Erorr when (a is 1.4) and (b is 0)', () => {
      const expectedOutput = 'Error';
      const output = calculateNumber('DIVIDE', 1.4, 0);

      expect(output).to.eq(expectedOutput);
    });
  });
});