const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('should equal 4 when (a is 2) and (b is 2)', () => {
    assert.equal(calculateNumber(2, 2), 4);
  });

  it('should equal 4 when (a is 1) and (b is 3)', () => {
    assert.equal(calculateNumber(1, 3), 4);
  });

  it('should equal 5 when (a is 1) and (b is 3.7)', () => {
    assert.equal(calculateNumber(1, 3.7), 5);
  });

  it('should equal 5 when (a is 1.2) and (b is 3.7)', () => {
    assert.equal(calculateNumber(1.2, 3.7), 5);
  });

  it('should equal 6 when (a is 1.5) and (b is 3)', () => {
    assert.equal(calculateNumber(1.5, 3.7), 6);
  });
});