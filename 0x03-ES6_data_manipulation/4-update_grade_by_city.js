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

  return studentsByCity.map((s) => ({
    id: s.id,
    firstName: s.firstName,
    location: s.location,
    grade: (newGrades
      .find((g) => g.studentId === s.id) !== undefined) ? newGrades.find((g) => g.studentId === s.id).grade : 'N/A',
  }));
}
