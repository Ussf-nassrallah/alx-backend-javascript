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

  it('should handle division by zero and return "Error"', function () {
    const result = calculateNumber('DIVIDE', 8, 0);
    assert.strictEqual(result, 'Error'); // Division by zero should return "Error"
  });
});