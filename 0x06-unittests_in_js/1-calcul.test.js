const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  it('should add two numbers when type is SUM', function () {
    const result = calculateNumber('SUM', 1.5, 3.7);
    assert.strictEqual(result, 6); // 1.5 rounded + 3.7 rounded = 6
  });

  it('should subtract two numbers when type is SUBTRACT', function () {
    const result = calculateNumber('SUBTRACT', 5.8, 2.3);
    assert.strictEqual(result, 4); // 5.8 rounded - 2.3 rounded = 4
  });

  it('should divide two numbers when type is DIVIDE', function () {
    const result = calculateNumber('DIVIDE', 10, 2);
    assert.strictEqual(result, 5); // 10 rounded / 2 rounded = 5
  });

  it('positive number and 0', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 5.0, 0), 'Error');
  });

  it('positive number and number rounded down to 0', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 5.0, 0.2), 'Error');
  });

  it('positive number and number rounded up to 0', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 5.0, -0.2), 'Error');
  });

  it('negative number and 0', () => {
    assert.strictEqual(calculateNumber('DIVIDE', -5.0, 0), 'Error');
  });

  it('negative number and number rounded down to zero', () => {
    assert.strictEqual(calculateNumber('DIVIDE', -5.0, 0.2), 'Error');
  });

  it('negative number and number rounded up to zero', () => {
    assert.strictEqual(calculateNumber('DIVIDE', -5.0, -0.2), 'Error');
  });

  it('0 and 0', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 0.0, 0.0), 'Error');
  });
});