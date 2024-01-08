/**
 * getStudentIdsSum - func that returns the sum of all the student ids
 * @arr: array
 * return: Number
*/

export default function getStudentIdsSum(arr) {
  /* function: getStudentIdsSum */
  let sum = 0;
  arr.map((student) => sum += student.id);
  return sum;
}
