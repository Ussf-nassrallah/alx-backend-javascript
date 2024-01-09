/**
 * getStudentIdsSum - func that returns the sum of all the student ids
 * @arr: array
 * return: Number
*/

export default function getStudentIdsSum(arr) {
  /* function: getStudentIdsSum */
  /**
   * @accumulator: holds the initialValue in the beginning
   *  and then the last returned value of the function
   */
  const result = arr.reduce((accumulator, currentValue) => accumulator + currentValue.id, 0);
  return result;
}
