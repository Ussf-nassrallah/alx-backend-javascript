/* Basic test with Mocha and Node assertion library */

const calculateNumber = (a, b) => {
  const sum = Math.round(a) + Math.round(b);
  return sum;
};

module.exports = calculateNumber;
