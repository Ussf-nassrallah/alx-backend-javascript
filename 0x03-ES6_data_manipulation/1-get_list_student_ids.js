/**
 * getListStudentIds - function that returns an array of ids
 * @arr: array
 * return: array of ids
*/

export default function getListStudentIds(arr) {
  /* function: getListStudentIds */
  let output = [];

  if (!Array.isArray(arr)) {
    return output;
  }

  output = arr.map((student) => student.id);
  return output;
}
