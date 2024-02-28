const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('floating point whole numbers', () => {
    const expectedOutput = 4;
    const output = calculateNumber(2.0, 2.0);

    assert.equal(output, expectedOutput);
  });

  it('floating point whole numbers', () => {
    const expectedOutput = 4;
    const output = calculateNumber(1.0, 3.0);

    assert.equal(output, expectedOutput);
  });

  it('should equal 5 when (a is 1) and (b is 3.7)', () => {
    const expectedOutput = 5;
    const output = calculateNumber(1.0, 3.7);

    assert.equal(output, expectedOutput);
  });

  it('should equal 5 when (a is 1.2) and (b is 3.7)', () => {
    const expectedOutput = 5;
    const output = calculateNumber(1.2, 3.7);

    assert.equal(output, expectedOutput);
  });

  it('should equal 6 when (a is 1.5) and (b is 3.7)', () => {
    const expectedOutput = 6;
    const output = calculateNumber(1.5, 3.7);

    assert.equal(output, expectedOutput);
  });
});