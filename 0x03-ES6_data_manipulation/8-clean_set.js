/**
 * cleanSet - returns a string of all the set
 *  values that start with a specific string
 * @set: Set
 * @startString: String
 * return: String
 */

const cleanSet = (set, startString) => {
  const result = [];

  if (startString === '' || !startString || !set) {
    return '';
  }

  for (const str of set.values()) {
    if (str.startsWith(startString)) {
      result.push(str.substring(startString.length));
    }
  }

  return result.join('-');
};

export default cleanSet;
