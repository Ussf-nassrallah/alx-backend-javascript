/**
 * getListStudents - function that returns an array of objects
 * @id: object id (Number)
 * @firstName: student first name (String)
 * @location: location (String)
 * return: array of objects
*/

export default function getListStudents() {
  /* function: getListStudents */

  const arr = [
    {
      id: 1,
      firstName: 'Guillaume',
      location: 'San Francisco',
    },
    {
      id: 2,
      firstName: 'James',
      location: 'Columbia',
    },
    {
      id: 5,
      firstName: 'Serena',
      location: 'San Francisco',
    },
  ];

  return arr;
}
