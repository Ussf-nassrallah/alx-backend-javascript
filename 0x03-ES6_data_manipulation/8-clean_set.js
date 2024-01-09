/**
 * cleanSet - returns a string of all the set
 *  values that start with a specific string
 * @set: Set
 * @startString: String
 * return: String
 */

const cleanSet = (set, startString) => {
  const result = [];

  if (startString === '') {
    return '';
  }

  for (const str of set) {
    if (str.includes(startString)) {
      result.push(str.replace(startString, ''));
    }
  }

  return result.join('-');
};

export default cleanSet;
