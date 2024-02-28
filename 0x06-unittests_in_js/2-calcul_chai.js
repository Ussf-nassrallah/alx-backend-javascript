/* Combining descriptions */

const calculateNumber = (type, a, b) => {
  if (type === 'SUM') {
    const sum = Math.round(a) + Math.round(b);
    return sum;
  }

  if (type === 'SUBTRACT') {
    const subtract = Math.round(a) - Math.round(b);
    return subtract;
  }

  if (type === 'DIVIDE') {
    const result = (b === 0) ? 'Error' : Math.round(a) / Math.round(b);
    return result;
  }

  return 0;
};

module.exports = calculateNumber;
