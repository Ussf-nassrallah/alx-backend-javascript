/**
 * Map data structure
 */

const groceriesList = () => {
  const arr = [
    ['Apples', 10],
    ['Tomatoes', 10],
    ['Pasta', 1],
    ['Rice', 1],
    ['Banana', 5],
  ];

  return new Map(arr);
};

export default groceriesList;
