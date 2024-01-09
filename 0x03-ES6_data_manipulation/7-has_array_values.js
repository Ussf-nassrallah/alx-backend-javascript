/**
 * hasValuesFromArray - that returns a boolean
 * if all the elements in the array exist within the set
 * @set: Set
 * @array: array
 * return: boolean
 */

const hasValuesFromArray = (set, array) => {
  const results = [];

  for (const ele of array) {
    results.push(set.has(ele));
  }

  if (results.includes(false)) {
    return false;
  }

  return true;
};

export default hasValuesFromArray;
