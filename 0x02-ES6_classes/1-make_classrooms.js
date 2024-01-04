/**
 * initializeRooms - function thats return an array
 * of 3 ClassRoom objects with the sizes 19, 20, and 34
*/

import ClassRoom from './0-classroom';

export default function initializeRooms() {
  const arr = [19, 20, 34];
  return (arr.map((n) => new ClassRoom(n)));
}
