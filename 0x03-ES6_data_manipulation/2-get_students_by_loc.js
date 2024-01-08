/**
 * getStudentsByLocation - function that returns an array of students
 *  who are located in a specific city
 * @arr: array
 * @city: city (String)
 * return: array of students
*/

export default function getStudentsByLocation(arr, city) {
  /* function: getStudentsByLocation */
  const output = arr.filter((student) => student.location === city);
  return output;
}
