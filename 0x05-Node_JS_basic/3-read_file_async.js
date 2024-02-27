/* Reading a file Asynchronously with Node JS */
const fs = require('fs').promises;

const filterStudents = (students, field) => {
  const output = students.filter((student) => student.field === field);
  return output;
};

const getStudentsNames = (students) => {
  const names = students.map((student) => student.firstname);
  return names;
};

const displayStudentsData = (students, fields) => {
  let output = `Number of students: ${students.length}\n`;
  for (let idx = 0; idx < fields.length; idx += 1) {
    const studentsList = filterStudents(students, fields[idx]);
    const studentsNames = getStudentsNames(studentsList);

    if (idx === fields.length - 1) {
      output += `Number of students in ${fields[idx]}: ${studentsList.length}. List: ${studentsNames.join(', ')}`;
    } else {
      output += `Number of students in ${fields[idx]}: ${studentsList.length}. List: ${studentsNames.join(', ')}\n`;
    }
  }
  return output;
};

const countStudents = async (path) => {
  try {
    const data = await fs.readFile(path, 'utf-8');
    const rows = data.trim().split('\n');
    const headers = rows[0].split(',');
    const students = [];

    for (let idx = 1; idx < rows.length; idx += 1) {
      const values = rows[idx].split(',');
      const student = {};

      headers.forEach((header, index) => {
        student[header] = values[index].trim();
      });

      students.push(student);
    }

    if (students.length !== 0) {
      output = displayStudentsData(students, ['CS', 'SWE']);
      console.log(output);
      return output;
    }
  } catch (error) {
    throw Error('Cannot load the database');
  }
};

module.exports = countStudents;
