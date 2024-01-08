/**
 * updateStudentGradeByCity - func that returns an array of students
 *  for a specific city with their new grade
 * @students: array
 * @city: string
 * @newGrades: array
 * return: array of newGrades students
*/

export default function updateStudentGradeByCity(students, city, newGrades) {
  /* function: updateStudentGradeByCity */
  const studentsByCity = students.filter((student) => student.location === city);

  for (let idx = 0; idx < studentsByCity.length; idx += 1) {
    const student = studentsByCity[idx];
    const gradeStudent = newGrades.find((gradeStudent) => gradeStudent.studentId === student.id);

    if (gradeStudent) {
      student.grade = gradeStudent.grade;
    } else {
      student.grade = 'N/A';
    }
  }

  return studentsByCity;
}
