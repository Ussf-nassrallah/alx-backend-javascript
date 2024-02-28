const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('round of a', () => {
    assert.equal(calculateNumber(18.90, 2), 21);
    assert.equal(calculateNumber(1.9, 0), 2);
    assert.equal(calculateNumber(3.50, 2), 6);
  });

  it('round of b', () => {
    assert.equal(calculateNumber(2, 18.90), 21);
    assert.equal(calculateNumber(0, 1.9), 2);
    assert.equal(calculateNumber(2, 3.50), 6);
  });

  it('sum of a and b', () => {
    assert.equal(calculateNumber(18.90, 20), 39);
    assert.equal(calculateNumber(1.9, 0.2), 2);
    assert.equal(calculateNumber(3.50, 2.9), 7);
  });
});