/**
 * cleanSet - returns a string of all the set
 *  values that start with a specific string
 * @set: Set
 * @startString: String
 * return: String
 */

const cleanSet = (set, startString) => {
  const result = [];

  if (!set || !startString || !(set instanceof Set) || typeof startString !== 'string') {
    return '';
  }

  for (const str of set.values()) {
    if (typeof value === 'string' && str.startsWith(startString)) {
      result.push(str.replace(startString, ''));
    }
  }

  return result.join('-');
};

export default cleanSet;
