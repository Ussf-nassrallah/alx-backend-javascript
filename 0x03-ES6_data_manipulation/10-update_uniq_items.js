/**
 * More map data structure
 */

const updateUniqueItems = (map) => {
  /* Function: updateUniqueItems */
  if (!(map instanceof Map)) {
    throw new Error('Cannot process');
  }

  map.forEach((v, k) => {
    if (v === 1) {
      map.set(k, 100);
    }
  });
};

export default updateUniqueItems;
