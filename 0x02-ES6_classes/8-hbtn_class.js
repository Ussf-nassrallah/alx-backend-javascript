/**
 * Implement a class named HolbertonClass:
 * @size: Number
 * @location: string
*/

export default class HolbertonClass {
  /* class: HolbertonClass */
  constructor(size, location) {
    this.size = size;
    this.location = location;
  }

  get size() {
    return this._size;
  }

  set size(value) {
    this._size = value;
  }

  get location() {
    return this._location;
  }

  set location(value) {
    this._location = value;
  }

  [Symbol.toPrimitive](h) {
    // When the class is cast into a Number, it should return the size.
    if (h === 'number') {
      return this.size;
    }
    // When the class is cast into a String, it should return the location.
    if (h === 'string') {
      return this.location;
    }
    // return object
    return this;
  }
}
