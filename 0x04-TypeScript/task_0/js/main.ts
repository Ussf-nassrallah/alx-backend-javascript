interface Student {
  firstName: string
  lastName: string
  age: number
  location: string
}

const student_1: Student = {
  firstName: 'youssef',
  lastName: 'nasrallah',
  age: 23,
  location: 'Italy'
}

const student_2: Student = {
  firstName: 'iliass',
  lastName: 'fokhar',
  age: 24,
  location: 'France'
}

const studentsList: Student[] = [student_1, student_2];