/**
 * getStudentIdsSum - func that returns the sum of all the student ids
 * @arr: array
 * return: Number
*/

export default function getStudentIdsSum(arr) {
  /* function: getStudentIdsSum */
  let sum = 0;

  for (let idx = 0; idx < arr.length; idx += 1) {
    sum += arr[idx].id;
  }

  return sum;
}
