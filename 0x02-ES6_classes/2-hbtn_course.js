/**
 * Implement a class named HolbertonCourse
 * @name: (String)
 * @length: (Number)
 * @students: (array of Strings)
*/

export default class HolbertonCourse {
  /* class: HolbertonCourse */
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
  }

  /* set course name */
  set name(value) {
    /* Check if course name value is not a string */
    if (typeof value !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = value;
  }

  /* get course name */
  get name() {
    return this._name;
  }

  /* set course length */
  set length(value) {
    /* check if course length value is not a number */
    if (typeof value !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = value;
  }

  /* get course length */
  get length() {
    return this._length;
  }

  /* set course students */
  set students(arr) {
    /* check if arr is not an Array */
    if (!Array.isArray(arr)) {
      throw new TypeError('Students must be an array of Strings');
    }
    /* array must be an array of Strings */
    if (!arr.every((s) => typeof s === 'string')) {
      throw new TypeError('Students must be an array of Strings');
    }
    /* set Students */
    this._students = arr;
  }

  /* get students list */
  get students() {
    return this._students;
  }
}
